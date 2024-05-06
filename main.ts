#! /usr/bin/env node 
import { Console } from "console";
import inquirer from "inquirer";
console.log("\n\twellcome to Shehzeen - Gussing game\n\t");
const randomNumber = Math.floor(Math.random() * 8 + 1);
const result = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type: "number",
        message: "Enter your guess number (Limit from 1 to 8):"
            
     },
])
if(result.userGuessedNumber === randomNumber){
    console.log("congrats ! your guessing number is correct.");

}
else{
     console.log("sorry! your guessing number is wrong.");
}