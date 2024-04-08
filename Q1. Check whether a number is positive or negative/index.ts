/* Check whether a number is positive or negative
Write a program that checks whether the given number is positive or negative.
*/
import inquirer from "inquirer";
import chalk from "chalk";

async function checkNumberIsPositiveOrNegative() {
  let inputNumber = await inquirer.prompt({
    name: "userInputNumber",
    message: "Enter a number",
    type: "number",
  });
  if (inputNumber.userInputNumber > 0) {
    console.log(
      chalk.green(`${inputNumber.userInputNumber} is a positive number`)
    );
  } else if (inputNumber.userInputNumber < 0) {
    console.log(
      chalk.green(`${inputNumber.userInputNumber} is a negative number`)
    );
  } else if (inputNumber.userInputNumber === 0) {
    console.log(
      chalk.green(
        `${inputNumber.userInputNumber} is neither a positive nor a negative number`
      )
    );
  } else {
    console.log(chalk.red("Invalid input"));
  }
}

async function checkNumberAgain() {
  do {
    await checkNumberIsPositiveOrNegative();
    var inputNumAgain = await inquirer.prompt({
      name: "inputNum",
      message: "Do you want to check for another number?",
      type: "input",
    });
  } while (
    inputNumAgain.inputNum === "y" ||
    inputNumAgain.inputNum === "yes" ||
    inputNumAgain.inputNum=== "Y" ||
    inputNumAgain.inputNum === "Yes"
  );
}
checkNumberAgain();
