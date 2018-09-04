/**
 * @name main.ts
 * @description The entry point of the interpreter
 * @returns NOTHING
 *
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */

// importing modules
import { VariableType } from "./Interfaces";
import chalk from "chalk";
import helper from "./help";
import set from "./set";
import { question } from "readline-sync";
import { arrowRight, pointer } from "figures";
import commands from "./commands";
import describe from "./describe";
import _delete from "./delete";
import copy from "./copy";
import exec from "./exec";
import show from "./show";

// global variables
var variables: VariableType = {};   // variable container
var args: Array<string>;  // arguments
var tmp: string;   // a temporary variable

// clearing the screen
console.clear();

// info message
console.log("Welcome to Syko Interpreter");
console.log("Current Version: v1.4.1");
console.log("Type ? for help\n");

// while true loop
while (true) {

    // getting user input from console
    args = question(chalk.bold(arrowRight) + " ").split(" ").filter(Boolean);
    if (args[0] === undefined) { // if nothing was entered then continue i.e skip furter execution
        continue;
    }

    // save the command to tmp for matching
    tmp = args[0].toLowerCase();

    // switch case on the command
    switch (tmp) {
        //#region GLOBAL ASSETS
        case commands.globals.clear: // clear
            console.clear();  // clear console command
            break;
        case commands.globals.exit: // exit
            process.exit(0);  // exit command
            break;
        case commands.globals.help: // ?
            helper.printAll();   // print all shows all the command
            break;
        case commands.globals.lic: // lic
            console.log("MIT")  // print license type
            break;
        case commands.globals.info:  // info
            console.log(chalk.yellow(`Syko Interpeter ${pointer} An easy to use and customisable interpreter`));
            console.log("Designed By : Gurkirat Singh");
            console.log("Platform : Cross Platform");
            console.log("Support Contact : tbhaxor@gmail.com");
            console.log(`Visit ${chalk.inverse("https://tbhaxor.me/syko")}`)
            break;
        //#endregion

        //#region  REPL ASSETS
        case commands.repl.set: // set
            variables = set(args, variables);  // set variable and then return new state of variable
            break;
        case commands.repl.describe:  // desc
            describe(args, variables);   // show description function
            break;
        case commands.repl.delete: // delete
            variables = _delete(args, variables);   // delete variable and return new state of variable
            break;
        case commands.repl.copy:  // copy
            variables = copy(args, variables);  // copy variable to others and return new state of variables
            break;
        case commands.repl.execute_external: // exec
            variables = exec(args, variables);  // execute external commands and return new state of variables
            break;
        case commands.repl.show: // show
            show(args, variables);  // show i.e print variable content
            break;
        //#endregion

        default:
            console.log(chalk.redBright("Invalid command"));  // if no command worked show "Invalid Command"
            break;
    }
    console.log(); // console new line on success
}
