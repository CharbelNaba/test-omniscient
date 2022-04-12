const scratchpad = async () => {
  const now = new Date()
  console.log(`UTC time is ${now}\nYou can test your code here\r`)
  console.log('-'.repeat(50))
}

try {
  await scratchpad();
} catch (error) {
  throw Error(error)
}
