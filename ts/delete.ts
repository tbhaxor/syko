import { VariableType } from "./Interfaces";
import helper from "./help";
import { play } from "figures";
import chalk from "chalk";

export default (args: Array<string>, values: VariableType): VariableType => {
    var variables = args.splice(1);
    if (variables.length === 0 || variables[0] === "?") {
        helper.printDelete();
        return values;
    }

    variables.forEach(value => {
        if (values[value] === undefined || values[value] === null)
            console.log(`variable: ${chalk.yellow(value)}   ${play}    ${chalk.redBright("Not Set")}`);
        else {
            delete values[value];
            console.log(`variable: ${chalk.yellow(value)}   ${play}    ${chalk.greenBright("Deleted")}`);
        }
    });
    return values;
}