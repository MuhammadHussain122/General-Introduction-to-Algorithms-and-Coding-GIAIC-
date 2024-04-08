/*
Write a program to determine the greater of two numbers.
*/
import inquirer from "inquirer";
import chalk from "chalk";

async function getGreaterNumber() {
  let inputNumbers = await inquirer.prompt([
    {
      name: "num1",
      message: "Enter first number",
      type: "number",
    },
    {
      name: "num2",
      message: "Enter second number",
      type: "number",
    },
  ]);
  if (inputNumbers.num1 > inputNumbers.num2) {
    console.log(
      chalk.green(`${inputNumbers.num1} is greater than ${inputNumbers.num2}`)
    );
  } else if (inputNumbers.num2 > inputNumbers.num1) {
    console.log(
      chalk.green(`${inputNumbers.num2} is greater than ${inputNumbers.num1}`)
    );
  } else if (inputNumbers.num1 === inputNumbers.num2) {
    console.log(
      chalk.green(`${inputNumbers.num1} is equal to ${inputNumbers.num2}`)
    );
  } else {
    console.log(chalk.red("Invalid inputs"));
  }
}
async function getGreaterNumberAgain() {
  do {
    await getGreaterNumber();
    var inputAgain = await inquirer.prompt({
      name: "inputNumbersAgain",
      message: "Do you want to check for more numbers?",
      type: "input",
    });
  } while (
    inputAgain.inputNumbersAgain === "y" ||
    inputAgain.inputNumbersAgain === "yes" ||
    inputAgain.inputNumbersAgain === "Y" ||
    inputAgain.inputNumbersAgain === "Yes"
  );
}
getGreaterNumberAgain();
