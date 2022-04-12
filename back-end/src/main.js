import * as fs from "fs"
import { jsonToCsv, filterDataAndWrite, csvToJson } from "./utils/jsonParser.js"

const main = async () => {
  var data = JSON.parse(fs.readFileSync("../data/vegetable_order.json"));
  const csv = await jsonToCsv(data)
  try {
    filterDataAndWrite("../output/json_output.csv", csv)
  }
  catch (e) {
    console.error(e.message)
  }

  // Bonus
  console.log(await csvToJson("../output/json_output.csv"))
  
}

try {
  await main();
} catch (error) {
  throw Error(error)
}
