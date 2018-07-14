import { VariableType } from "./Interfaces";
import chalk from "chalk";
import helper from "./help";
import set from "./set";
import { question } from "readline-sync";
import { arrowRight } from "figures";
import commands from "./commands";
import describe from "./describe";
import _delete from "./delete";
import copy from "./copy";

var variables: VariableType = {};
var args: Array<string>;
var tmp: string;

console.log("Welcome to Syko Interpreter");
console.log("Current Version: v1.0.1");
console.log("Type ? for help\n");
while (true) {
    args = question(chalk.bold(arrowRight) + " ").split(" ").filter(Boolean);
    if (args[0] === undefined) {
        continue;
    }

    tmp = args[0].toLowerCase();

    switch (tmp) {
        case commands.globals.clear:
            console.clear();
            break;
        case commands.globals.exit:
            process.exit(0);
            break;
        case commands.globals.help:
            helper.printAll();
            break;
        case commands.repl.set:
            variables = set(args, variables);
            break;
        case commands.repl.describe:
            describe(args, variables);
            break;
        case commands.repl.delete:
            variables = _delete(args, variables);
            break;
        case commands.repl.copy:
            variables = copy(args, variables);
            break;
        default:
            console.log(chalk.redBright("Invalid command"));
            break;
    }
    console.log();
}