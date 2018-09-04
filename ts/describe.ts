/**
 * @name describe.ts
 * @description The variable property describer module 
 * @returns NOTHING
 *
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */

// importing modules
import Help from "./help";
import chalk from "chalk";
import { VariableType } from "./Interfaces"

// exporting default function without any return type
export default (args: Array<string>, values: VariableType): void => {

    // getting the list of variables to be described
    let varibles = args.splice(1);

    // check if variables are passed or if the first variable is "?"
    if (varibles[0] === undefined || varibles[0] === "?") {
        Help.printDump(); // print describe help
        return; // end the loop here
    }

    // traversing all the list
    varibles.forEach((variable: string) => {
        // checking if variable if set or not
        if (values[variable] === undefined || values[variable] === null)
            console.log(`${chalk.greenBright("name")}: ${variable}    ${chalk.greenBright("value")}: ${chalk.redBright("Not Set")}   ${chalk.greenBright("type")}: ${chalk.redBright("Not Set")}`);
        // checking if typeof variable is string or not
        else if (typeof values[variable] === "string" && values[variable].split(" ").length > 1)
            console.log(`${chalk.greenBright("name")}: ${variable}    ${chalk.greenBright("value")}: "${values[variable]}"   ${chalk.greenBright("type")}: ${typeof values[variable]}`);
        else
            console.log(`${chalk.greenBright("name")}: ${variable}    ${chalk.greenBright("value")}: ${values[variable]}   ${chalk.greenBright("type")}: ${typeof values[variable]}`);
    });

}