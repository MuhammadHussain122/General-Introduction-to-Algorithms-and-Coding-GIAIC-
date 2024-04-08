/*
Write a simple number guessing game. Provide a selected number and a guess. Based on those numbers, give players clues 
if their guess is higher, lower, or correct.
*/

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const rest = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
async function welcome() {
  let title = chalkAnimation.neon("let's kick of the game!");
  await rest();
  title.stop();
}
await welcome();
type ansType = {
  userGuessedNumber: number;
};

async function randomAndGuessedNoCompare() {
  let computerGeneratedRandomNumber = Math.floor(Math.random() * 5 + 1);

  let userGuessedNo: ansType = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: "Guess a number between 1 - 6",
    },
  ]);

  const { userGuessedNumber } = userGuessedNo;
  if (userGuessedNumber > 0 && userGuessedNumber <= 6  ) {
    if (userGuessedNumber === computerGeneratedRandomNumber) {
      console.log(
        chalk.green("Congratulation!, You guessed the correct number")
      );
    } else if (userGuessedNumber !== computerGeneratedRandomNumber) {
      if (userGuessedNumber > computerGeneratedRandomNumber) {
        console.log("Your guess is greater than the correct one");
      } else if (userGuessedNumber < computerGeneratedRandomNumber) {
        console.log("Your guess is smaller than the correct one");
      } else {
        console.log(chalk.red("Invalid input!"));
      }
    }
  } else if(userGuessedNumber> 6) {
    console.log(chalk.red("your guess is out of given range! "));
  }
  else{
    console.log(chalk.red("Invalid input!"));
  }
}

async function playAgain() {
  do {
    await randomAndGuessedNoCompare();
    var replay = await inquirer.prompt({
      name: "playAgain",
      type: "input",
      message: "Would you like to continue? yes or no",
    });
  } while (
    replay.playAgain == "y" ||
    replay.playAgain == "yes" ||
    replay.playAgain == "Y" ||
    replay.playAgain == "Yes"
  );
}
playAgain();
