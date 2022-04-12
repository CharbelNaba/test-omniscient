import * as cowsay from "cowsay";

const printExample = (inputString = "Let's go !") => {
  const message = cowsay.say({ text: JSON.stringify(inputString) })
  console.log(message);
  return message;
};

export default printExample;
