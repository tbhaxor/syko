/**
 * @name delete.ts
 * @description The delete variable module
 * @returns New variable state
 *
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */


// importing modules
import { VariableType } from "./Interfaces";
import helper from "./help";
import { play } from "figures";
import chalk from "chalk";

// exporting the default function with VariableType as return type
export default (args: Array<string>, values: VariableType): VariableType => {

    // getting the list of variables to delete
    var variables = args.splice(1);

    // checking if no varible was passed or first variable is ?
    if (variables.length === 0 || variables[0] === "?") {
        helper.printDelete();  // printing the help
        return values;  // returning the original state
    }

    // traversing all the elements of array
    variables.forEach((value: string) => {
        // checking if variable exits or not
        if (values[value] === undefined || values[value] === null)
            console.log(`variable: ${chalk.yellow(value)}   ${play}    ${chalk.redBright("Not Set")}`);  // print not set
        else {
            delete values[value]; // delete the variable
            console.log(`variable: ${chalk.yellow(value)}   ${play}    ${chalk.greenBright("Deleted")}`); // pring deleted
        }
    });

    // returning the new state of values
    return values;
}