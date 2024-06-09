import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreenBright.bold.italic("\n\t 🎀 WELCOM IN ATM MACHINE 🎀 \n\t"));
let CHECK_BALANCE = 0;
let condition = true;
let depositt = 0;
let id_name = await inquirer.prompt([{
        name: "id",
        type: "input",
        message: chalk.hex("#42eff5").bold("PLEASE INTER YOUR ID NAME ❔ \n")
    },
    {
        name: "pin",
        type: "number",
        message: chalk.hex("#42eff5").bold("PLEASE INTER YOUR 4 DIGIT PIN CODE ❔ \n")
    }
]);
console.log(chalk.bold.bgMagenta(`\tYOUR ID NAME IS ${id_name.id} \n`));
if (id_name.pin < 9999) {
    if (id_name.pin > 999) {
        console.log(chalk.bold.bgMagenta(`\t YOUR PIN CODE IS ${id_name.pin}\n`));
        while (condition) {
            let listt = await inquirer.prompt({
                name: "lst",
                type: "list",
                message: chalk.hex("#42eff5").bold("CHOOSE ONE ❔ \n"),
                choices: ["DEPOSITE AMOUNT", "WITHDRAW AMOUNT", "CHECK BALANCE"]
            });
            //******************DEPOSITE AMOUNT************************* */
            if (listt.lst === "DEPOSITE AMOUNT") {
                let deposit = await inquirer.prompt({
                    name: "dep",
                    type: "number",
                    message: chalk.hex("#42eff5").bold("\nENTRE YOUR DEPOSITE AMOUNT ❔  \n")
                });
                depositt += deposit.dep;
                CHECK_BALANCE += deposit.dep;
                console.log(chalk.hex("#f542dd").bold(`\n\t 💸 NOW YOUR ACCOUNT BALACE IS ${CHECK_BALANCE} 💸\n`));
            }
            //******************CHECK BALANCE************************* */
            if (listt.lst === "CHECK BALANCE") {
                console.log(chalk.hex("#f542dd").bold(`\n\t 💸  NOW YOUR ACCOUNT BALACE IS ${CHECK_BALANCE} 💸 \n`));
            }
            //******************WITHDRAW AMOUNT ************************* */
            if (listt.lst === "WITHDRAW AMOUNT") {
                let Withdraw = await inquirer.prompt({
                    name: "with",
                    type: "number",
                    message: chalk.hex("#42eff5").bold("\nENTRE YOUR WITHDRAW  AMOUNT ❔ \n ")
                });
                if (Withdraw.with > 0) {
                    if (Withdraw.with <= CHECK_BALANCE) {
                        CHECK_BALANCE -= Withdraw.with;
                        console.log(chalk.hex("#f542dd").bold(`\t 💸 YOUR WITHDREW AMOUNT IS ${Withdraw.with} 💸 \n`));
                        console.log(chalk.hex("#f542dd").bold(`\t 💸 NOW YOUR ACCOUNT BALACE IS ${CHECK_BALANCE} 💸 \n`));
                    }
                    else {
                        console.log(chalk.bold.red("YOUR WITHDRAW AMOUNT IS GREATER THAN YOUR ACCOUNT BALANCE\n"));
                    }
                }
                else {
                    console.log(chalk.bold.red(" ❌ PLEASE ENTRE COREECT AMOUNT 💸 \n"));
                }
            }
            //**********************************CONFIRMATION  */
            let confirmation = await inquirer.prompt({
                name: "quation",
                type: "confirm",
                message: chalk.hex("#42eff5").bold("YOU WANT TO USE ATM AGAIN ❔ \n"),
                default: true
            });
            if (confirmation.quation === false) {
                condition = false;
            }
        }
        console.log(chalk.bgGreenBright.bold.italic("\n\t 🎀 THANKS FOR USING ATM 🎀 "));
    }
    else {
        console.log(chalk.bold.red("\n ❌  INVALIED PIN CODE PLEASE ENTER 4 DIGIT CODE ❌  "));
    }
}
else {
    console.log(chalk.bold.red("\n\t ❌ INVALIED PIN CODE PLEASE ENTER 4 DIGIT CODE ❌ "));
}
