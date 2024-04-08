/* 
Write a program that checks if a number is even or odd.
*/
import inquirer from "inquirer";
import chalk from "chalk";

async function getEvenOrOddNumber() {
  let inputNum = await inquirer.prompt({
    name: "userInputNum",
    message: "Enter a number",
    type: "number",
  });
  if (
    inputNum.userInputNum % 2 === 0 &&
    (0 % inputNum.userInputNum === 0 || inputNum.userInputNum === 0)
  ) {
    console.log(chalk.green(`${inputNum.userInputNum} is an even number`));
  } else if (
    inputNum.userInputNum % 2 !== 0 &&
    0 % inputNum.userInputNum === 0
  ) {
    console.log(chalk.green(`${inputNum.userInputNum} is an odd number`));
  } else {
    console.log(chalk.red("Inavlid input"));
  }
}
async function getEvenOrOddNumberAgain() {
  do {
    await getEvenOrOddNumber();
    var getNumAgain = await inquirer.prompt({
      name: "getNum",
      message: "Do you want to check for another number?",
      type: "input",
    });
  } while (
    getNumAgain.getNum === "y" ||
    getNumAgain.getNum === "yes" ||
    getNumAgain.getNum === "Y" ||
    getNumAgain.getNum === "Yes"
  );
}
getEvenOrOddNumberAgain();
