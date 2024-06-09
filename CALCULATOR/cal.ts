import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGreenBright.bold.italic.underline
    ("\n\t 👑 ******* ❤ **********❤ ❤  NAAZ QUEEN CALCULATOR ❤ ❤ ******** ❤ ***********👑 \n\t",));

let condition = true
while(condition){
let quation = await inquirer.prompt([{

        name : "q1",
        type : "list",
        message : chalk.hex("#a832a8").bold("** PLEASE SELECT ONE SYMBOL  **\n"),
        choices :  [ "➕","➖", "✖ ","➗" ,"%"]


},

{

    name : "q2",
    type : "number",
    message : chalk.hex("#a832a8").bold("** ENTER YOUR  FIRST NUMBER  ** \n"),
  


},  

{

    name : "q3",
    type : "number",
    message : chalk.hex("#a832a8").bold("** ENTER YOUR  SECOND  NUMBER  **\n"),
    


},

]
)

let Plus = quation.q2 + quation.q3
let Minus = quation.q2 - quation.q3
let Multiply = quation.q2 * quation.q3
let Divide = quation.q2 / quation.q3
let Module = quation.q2 % quation.q3
 

if (quation.q1==="➕"){

    console.log(chalk.bgCyanBright.bold("\n\t YOUR ANS IS! " ,Plus , "🎉","\n"));
    
} 
else  if (quation.q1==="➖"){

    console.log(chalk.bgCyanBright.bold("\n\t YOUR ANS IS!" ,Minus ,"🎉", "\n"));
    
}  
else  if (quation.q1==="✖ "){

    console.log(chalk.bgCyanBright.bold("\n\t YOUR ANS IS!" ,Multiply ,"🎉", "\n"));
    
}
else  if (quation.q1==="➗" ){

    console.log(chalk.bgCyanBright.bold("\n\t YOUR ANS IS!" ,Divide ,"🎉", "\n"));
    
}
else  if (quation.q1==="%"){

    console.log(chalk.bgCyanBright.bold("\n\t YOUR ANS IS!" ,Module ,"🎉", "\n"));
    
}

let last_quation = await inquirer.prompt({
      name :"last",
      type :"confirm",
      message : chalk.hex("#a832a8").bold("❤  YOU MAY WANT TO USE THE CALCULATOR AGAIN ❔ ❤ \n "),
      default : true
})
 
if(last_quation.last === false)
    {
        condition = false

        console.log(chalk.bgGreenBright.bold.italic.underline
            ("\t\n 👑 ********* ❤ ******** ❤ THANKS FOR USING ❤ ********** ❤ ********* 👑 ",))
    }


}