/*
Write a simple JavaScript program that checks if a person is eligible for a CNIC 
(show a message with the person's name).
*/
import inquirer from "inquirer";
import chalk from "chalk";

async function checkIfUserIsEligibleForCNIC() {
  let inputAge = await inquirer.prompt(
    [{
      name: "userInputName",
      message: "Enter your name",
      type: "input",
    },
    {
      name: "userInputAge",
      message: "Enter your age",
      type: "number",
    }]
  );
  if (inputAge.userInputAge >= 18) {
    console.log(chalk.green(`Dear ${inputAge.userInputName}, you are eligible for CNIC`));
  } else {
    console.log(chalk.red(`Dear ${inputAge.userInputName}, you are not eligible for CNIC`));
  }
}

async function checkIfUserIsEligibleForCNICAgain() {
  do {
    await checkIfUserIsEligibleForCNIC();
    var checkAgain = await inquirer.prompt({
      name: "checkForCNICAgain",
      message: "Do you want to check for another person's eligiblity for CNIC?",
      type: "input",
    });
  } while (
    checkAgain.checkForCNICAgain === "y" ||
    checkAgain.checkForCNICAgain === "yes" ||
    checkAgain.checkForCNICAgain === "Y" ||
    checkAgain.checkForCNICAgain === "Yes"
  );
}
checkIfUserIsEligibleForCNICAgain();
