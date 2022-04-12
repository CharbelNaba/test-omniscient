import printExample from "./example/test-module.js"

const main = async () => {
  const now = new Date()
  console.log(`UTC time is ${now} \nWrite your production code here`)
  printExample()
  console.log('-'.repeat(50))
  /**
   * Please import all your code, don't type any logic here just import functions and run them.
   */
}

try {
  await main();
} catch (error) {
  throw Error(error)
}
