/*
Create a program to check a student's grade and percentage.
*/

import inquirer from "inquirer";
import chalk from "chalk";

async function getPercentageAndGrade() {
  let inputMarks = await inquirer.prompt([
    {
      name: "obtainedMarks",
      message: "enter obtained marks",
      type: "number",
    },
    {
      name: "totalMarks",
      message: "enter total marks",
      type: "number",
    },
  ]);
  const percentage = (inputMarks.obtainedMarks / inputMarks.totalMarks) * 100;
  if (percentage >= 45 && percentage <= 100) {
    console.log(chalk.green(`percentage: ${Math.floor(percentage)}`));
    if (percentage >= 90 && percentage <= 100) {
      console.log(chalk.green(`grade: A+`));
    } else if (percentage >= 85 && percentage <= 89) {
      console.log(chalk.green(`grade: A`));
    } else if (percentage >= 80 && percentage <= 84) {
      console.log(chalk.green(`grade: B+`));
    } else if (percentage >= 74 && percentage <= 79) {
      console.log(chalk.green(`grade: B`));
    } else if (percentage >= 69 && percentage <= 73) {
      console.log(chalk.green(`grade: C+`));
    } else if (percentage >= 60 && percentage <= 68) {
      console.log(chalk.green(`grade: C`));
    } else if (percentage >= 50 && percentage <= 59) {
      console.log(chalk.green(`grade: D`));
    } else if (percentage >= 45 && percentage <= 49) {
      console.log(chalk.green(`grade: E`));
    }
  } else if (percentage < 45 && percentage >= 0) {
    console.log(chalk.red(`percentage: ${Math.floor(percentage)}`));
    if (percentage < 45 && percentage >= 0) {
      console.log(chalk.red(`grade: F`));
    } else {
      console.log(chalk.red("Invalid input"));
    }
  } else {
    console.log(chalk.red("Invalid input"));
  }
}
async function getPercentageAndGradeAgain() {
  do {
    await getPercentageAndGrade();
    var inputMarksAgain = await inquirer.prompt({
      name: "enterMarksAgain",
      message: "Do you want to check for more numbers?",
      type: "input",
    });
  } while (
    inputMarksAgain.enterMarksAgain === "y" ||
    inputMarksAgain.enterMarksAgain === "yes" ||
    inputMarksAgain.enterMarksAgain === "Y" ||
    inputMarksAgain.enterMarksAgain === "Yes"
  );
}
getPercentageAndGradeAgain();
