import jsonexport from "jsonexport"
import * as fs from "fs"

/**
 * function that checks if there was processing error
 * @param json : JSON object to be checked
 */
export function checkProcessingError(json) {
    const entries = Object.entries(json)
    for (let entry of entries) {
        let key = entry[0]
        let value = entry[1]
        if (value === "#ERROR PROCESSING") {
            return key
        }
        else if (typeof value == 'object' && checkProcessingError(value)) {
            return `${key}_${checkProcessingError(value)}`
        }
    }
}


/**
 * function that checks if there are any array key
 * @param json : JSON object to be checked
 */
export function checkKeyArray(json) {
    const entries = Object.entries(json)
    for (let entry of entries) {
        let key = entry[0]
        let value = entry[1]
        if (key.startsWith("[") && key.endsWith("]")) {
            return true
        }
        else {
            if (typeof value == 'object' && checkKeyArray(value)) {
                return true
            }
        }
    }
    return false
}

/**
 * function that returns depth of the JSON Object
 * @param o : JSON object to be checked
 */
export const objectDepth = (o) =>
    Object(o) === o ? 1 + Math.max(-1, ...Object.values(o).map(objectDepth)) : 0

/**
 * function that checks the validity of the JSON object
 * @param json : JSON object to be checked
 */
export function isJsonValid(json) {
    if (Array.isArray(json)) {
        for (let j in json) {
            isJsonValid(j)
        }
    }
    else {
        if (objectDepth(json) > 2) {
            throw new Error("Can't process JSON objects that have a depth higher than 2")
        }
        if (checkKeyArray(json)) {
            throw new Error("JSON files can't contain arrays as keys, arrays are bad...")
        }
        if (checkProcessingError(json)) {
            throw new Error(`${checkProcessingError(json)} contains a processing error`)
        }
    }
}

/**
 * function that converts a JSON Object to CSV
 * @param json : JSON object to be checked
 */
export function jsonToCsv(json) {
    try {
        isJsonValid(json)
        return jsonexport(json, { rowDelimiter: ';', verticalOutput: false, headerPathString: "_" });
    }
    catch (e) {
        throw new Error(e.message)
    }

}

/**
 * function that converts CSV to JSON
 * @param csvPath : Path of the CSV file
 */
export async function csvToJson(csvPath) {
    const csv = (await fs.readFileSync(csvPath)).toString()
    var lines = csv.split("\n").filter(l => l !== "" && l !== "\n" && l !== " ");

    var result = [];
    var headers = lines[0].split(";");

    for (var i = 1; i < lines.length; i++) {

        var obj = {};
        var currentline = lines[i].split(";");
        let nestedObj = {}
        for (var j = 0; j < headers.length; j++) {
            if (headers[j].includes("_")) {
                let nestedHeaders = headers[j].split("_")
                if (obj[nestedHeaders[0]]) {
                    nestedObj = obj[nestedHeaders[0]]
                    nestedObj[nestedHeaders[1]] = currentline[j]
                }
                else {
                    nestedObj[nestedHeaders[1]] = currentline[j]
                    obj[nestedHeaders[0]] = nestedObj
                }
            }
            else {
                obj[headers[j]] = currentline[j];
            }
        }

        result.push(obj);

    }
    console.log("Conversion from CSV to JSON was successfull")
    return JSON.stringify(result);
}

/**
 * function that filters incoming data and writes it to output file
 * @param outputPath : Path of output file
 * @param csvInput : incoming data in csv format
 */
export function filterDataAndWrite(outputPath, csvInput) {
    const fileContent = fs.existsSync(outputPath) ? fs.readFileSync(outputPath) : ""
    let csv

    if (fileContent.length !== 0) {
        // If the file is not empty we don't add the rows that already exist
        if (csvInput.split("\n")[0] == fileContent.toString().split("\n")[0]) {
            let newData = csvInput.split("\n").slice(1).filter(e => !fileContent.toString().split("\n").includes(e));
            csv = (`\n${newData.join("\n")}`)
        }
        else {
            throw new Error("The JSON object's fields don't match the ones mentioned in the CSV file")
        }
    }
    else {
        csv = csvInput
    }

    fs.appendFile(outputPath, csv, (err) => {

        // In case of a error throw err.
        if (err) throw err;
    })
    console.log("CSV file successfully written")
}