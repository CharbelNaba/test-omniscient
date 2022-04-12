import * as fs from "fs"
import { jsonToCsv, filterDataAndWrite, csvToJson } from "./utils/jsonParser.js"

const main = async () => {
  var data = JSON.parse(fs.readFileSync("./data/vegetable_order.json"));
  const csv = await jsonToCsv(data)
  const outputPath = "./output/json_output.csv"
  try {
    filterDataAndWrite(outputPath, csv)
  }
  catch (e) {
    console.error(e.message)
  }

  // Bonus
  if (fs.existsSync(outputPath) && fs.readFileSync(outputPath).length !== 0) {
    console.log(await csvToJson("./output/json_output.csv"))
  }

}

try {
  (async () => {
    await main()
  })();
} catch (error) {
  throw Error(error)
}
