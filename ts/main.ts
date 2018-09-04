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
var variables: VariableType = {};
var args: Array<string>;
var tmp: string;

// clearing the screen
console.clear();

// info message
console.log("Welcome to Syko Interpreter");
console.log("Current Version: v1.0.1");
console.log("Type ? for help\n");

// while true loop
while (true) {

    args = question(chalk.bold(arrowRight) + " ").split(" ").filter(Boolean);
    if (args[0] === undefined) {
        continue;
    }

    tmp = args[0].toLowerCase();

    switch (tmp) {
        //#region GLOBAL ASSETS
        case commands.globals.clear: // clear
            console.clear();
            break;
        case commands.globals.exit: // exit
            process.exit(0);
            break;
        case commands.globals.help: // ?
            helper.printAll();
            break;
        case commands.globals.lic: // lic
            console.log("MIT")
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
            variables = set(args, variables);
            break;
        case commands.repl.describe:  // desc
            describe(args, variables);
            break;
        case commands.repl.delete: // delete
            variables = _delete(args, variables);
            break;
        case commands.repl.copy:  // copy
            variables = copy(args, variables);
            break;
        case commands.repl.execute_external: // exec
            variables = exec(args, variables);
            break;
        case commands.repl.show:
            show(args, variables);
            break;
        //#endregion

        default:
            console.log(chalk.redBright("Invalid command"));
            break;
    }
    console.log();
}