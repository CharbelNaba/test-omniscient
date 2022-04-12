import jsonexport from "jsonexport"

var testObj = {
    name: "John",
    age: 10,
    address: {
        street: "St street",
        code: "1234-135"
    }
}

var input={
    omniscient:{
        devs:{
            front:{
                first_name:"Charbel",
                last_name:"Naba"
            },
            back:{
                first_name:"Char",
                last_name:"bel"
            }
        }
    },
    naba:{
        "#ERROR PROCESSING":{
            first_name:"Char",
            last_name:"bel"
        }
    },
}

function checkError(json){
    if (json.hasOwnProperty("#ERROR PROCESSING")){
        return true
    }
    else{
        for (var key in json){
            if (typeof json[key]=='object' && checkError(json[key])){
                return true
            }
        }
        return false
}}

function checkKeyArray(json){
    const entries=Object.entries(json)
    for (let entry of entries){
        let key=entry[0]
        let value=entry[1]
        if (key.startsWith("[") && key.endsWith("]")){
            return true
        }
        else {
            if (typeof value=='object' && checkKeyArray(value)){
                return true
            }
        }
    }
    return false
}

function convert(json){
    return jsonexport(json, {rowDelimiter: ';', verticalOutput:false, headerPathString:"_"});
}

function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
    var headers=lines[0].split(";");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(";");
        let nestedObj={}
        for(var j=0;j<headers.length;j++){
            if (headers[j].includes("_")){
                let nestedHeaders=headers[j].split("_")
                if(obj[nestedHeaders[0]]){
                    nestedObj=obj[nestedHeaders[0]]
                    nestedObj[nestedHeaders[1]]=currentline[j]
                }
                else{
                    nestedObj[nestedHeaders[1]]=currentline[j]
                    obj[nestedHeaders[0]]=nestedObj
                }
            }
            else{
                obj[headers[j]] = currentline[j];
            }
        }
  
        result.push(obj);
  
    }
    return JSON.stringify(result);
  }
// const csv=await convert(testObj)
// console.log(csv)
// const jason=csvJSON(csv)
// console.log(jason)
const objectDepth = (o) =>
  Object (o) === o ? 1 + Math .max (-1, ... Object .values(o) .map (objectDepth)) : 0 


