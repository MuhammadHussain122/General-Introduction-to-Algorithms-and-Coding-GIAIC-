/*
Write a program that calculates the Body Mass Index (BMI) and categorizes it.
*/
import inquirer from "inquirer";
import chalk from "chalk";
async function calculateBMI() {
    let inputWeightAndHeight = await inquirer.prompt([
        {
            name: "inputWeight",
            message: "enter your weight",
            type: "number",
        },
        {
            name: "inputHeight",
            message: "enter your Height",
            type: "number",
        },
    ]);
    const heightInMeters = inputWeightAndHeight.inputHeight * 0.3048;
    // BMI formula = weight (kg) / (height in meters * height in meters)
    const getBMI = inputWeightAndHeight.inputWeight / (heightInMeters * heightInMeters);
    if (getBMI < 18.5 && getBMI > 0) {
        console.log(chalk.green("categoryOfBMI: Under weight"));
    }
    else if (getBMI >= 19 && getBMI < 24.9) {
        console.log(chalk.green("categoryOfBMI: Normal weight"));
    }
    else if (getBMI >= 25 && getBMI < 29.9) {
        console.log(chalk.green("categoryOfBMI: Over weight"));
    }
    else if (getBMI >= 30 && getBMI < 34.9) {
        console.log(chalk.green("categoryOfBMI: Obese(Class 1)"));
    }
    else if (getBMI >= 35 && getBMI < 39.9) {
        console.log(chalk.green("categoryOfBMI: Obese(Class 2)"));
    }
    else if (getBMI >= 40) {
        console.log(chalk.green("categoryOfBMI: Obese(Class 3)"));
    }
    else {
        console.log(chalk.red("Invalid input"));
    }
}
async function calculateBMIAgain() {
    do {
        await calculateBMI();
        var getBMIAgain = await inquirer.prompt({
            name: "InputBMIAgain",
            type: "input",
            message: "Would you like to calculate BMI again? yes or no",
        });
    } while (getBMIAgain.InputBMIAgain == "y" ||
        getBMIAgain.InputBMIAgain == "yes" ||
        getBMIAgain.InputBMIAgain == "Y" ||
        getBMIAgain.InputBMIAgain == "Yes");
}
calculateBMIAgain();
