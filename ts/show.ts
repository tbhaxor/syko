/**
 * @name show.ts
 * @description The print value module
 * @returns NOTHING
 * 
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */

// importing modules
import { VariableType } from "./Interfaces";
import helper from "./help";
import chalk from "chalk";

// default export the show function
export default (args: Array<string>, vars: VariableType): void => {

    // getting the variable to be printed
    var __var__: string = args[1];

    // checking if variable to print is set or is "?"
    if (__var__ == undefined || __var__ == "?") {
        helper.printShow();  // printing show help
        return; // prevents the further execution
    }

    // checking if varible is set or not
    if (vars[__var__] == undefined || vars[__var__] == null) {
        console.log(chalk.red("Variable not set"));
    } else {
        // checking if its an array
        if (typeof vars[__var__] == "object") {
            console.log(vars[__var__].join("\n")); // imploding elements with "\n" delimiter
        }
        else {
            console.log(vars[__var__]);  // printing the value otherwise
        }
    }
}