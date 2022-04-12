import printExample from "../example/test-module.js";
import { defaultString } from "./fixtures/test-module.fixture.js";
import Crypto from "crypto";

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
