import inquirer from "inquirer";
import chalk from "chalk";

let score = 0;

let myname = await inquirer.prompt([{
        name: "namee",
        type: "input",
        message: chalk.blue.bold("\n WHAT IS YOUR NAME ❔")

    }]);



console.log(chalk.bgYellowBright.bold.italic.underline(`\n\t WELCOM DEAR ${myname.namee} 🥰 \t `));

console.log(chalk.bgGreenBright.bold("\n\t NUMBER GUESSING GAME  HAS BEEN START 😀 \n\t"));


let condition = true;

while (condition) {
    let gassing_number = await inquirer.prompt([{
            name: "ans",
            type: "number",
            message: chalk.blue.bold("PLEASE GUESS NUMBER BETWEEEN 1 TO 5 ❔ ")
        }]);


    //random create krky dega number. 5 sy multiplay ka matlb srif 5 tk chiye number or ye number esy deta he 5.00999
    //to piche waly numbers ko khatam krny ke liye use kiya he floor ka  


    let creat_number = Math.floor(Math.random() * 5 + 1);

    if (gassing_number.ans === creat_number) {
        console.log(chalk.bgYellowBright.bold.italic("\t\n ✨ 🎇 CONGRATULATION  YOU GUESS RIGHT NUMBER ✨ 🎇\t"));
        score++;
        console.log(chalk.green.bold(`\n\t NOW YOUR SCORE IS ${score} 🏆 \n `));
    }

    else {
        console.log(chalk.bgRed.bold("\n\t YOU GUESS WRONG NUMBER 😢 ❌ \t "));
        console.log(chalk.green.bold("\t TRY AGAIN 🙉 \t\n"));
    }

    let continuee = await inquirer.prompt({
        name: "anss",
        type: "confirm",
        message: chalk.blue.bold("YOU WANT TO PLAY THE  GAME AGAIN 😀 ❔ \n"),
        default: true
    });

    if (continuee.anss === false) {
        condition = false;
    }
}
console.log(chalk.bgYellowBright.bold.italic(`\n\tTHANKS FOR PLAYING NUMBER GUESSING GAME ${myname.namee} 🤗 🎁`));
