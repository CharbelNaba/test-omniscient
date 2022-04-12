import printExample from "../example/test-module.js";
import { defaultString } from "./fixtures/test-module.fixture.js";
import Crypto from "crypto";
import {isJsonValid} from "../utils/jsonParser.js"

describe("Test module command", () => {
  it("should returns a default value in ASCII art", () => {
    const output = printExample();
    expect(output).toEqual(defaultString);
  });

  it("should return your input as a message", async () => {
    const size = 15;
    const randomString = Crypto.randomBytes(size)
      .toString("base64")
      .slice(0, size);
    const output = printExample(randomString);
    const test = output.indexOf(randomString)
    expect(test > 0).toBe(true);
  });
});

describe("Test isJsonValid function", () => {
  it("should throw an error when depth is higher than 2", () => {
    var json={
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
      }
    }
    try{
      isJsonValid(json);
    }
    catch(e){
      expect(e.message).toBe("Can't process JSON objects that have a depth higher than 2");
    }
  });

  it("should throw an error when Error Processing", async () => {
    var json={
      naba:{
        first_name:"#ERROR PROCESSING",
        last_name:"bel"
      }
    }
    try{
      isJsonValid(json);
    }
    catch(e){
      expect(e.message).toBe("naba_first_name contains a processing error");
    }
  });

  it("should throw an error if JSON files have keys containing arrays", async () => {
    var json={
      "[naba]":{
        first_name:"Char",
        last_name:"bel"
      }
  }
try{
  isJsonValid(json);
}
catch(e){
  expect(e.message).toBe("JSON files can't contain arrays as keys, arrays are bad...");
}
    
    
  });
});