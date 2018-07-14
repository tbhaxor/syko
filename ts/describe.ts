import Help from "./help";
import chalk from "chalk";
import { VariableType } from "./Interfaces"
export default (args: Array<string>, values: VariableType): void => {
    let varibles = args.splice(1);

    if (varibles[0] === undefined || varibles[0] === "?") {
        Help.printDump();
        return;
    }

    varibles.forEach(variable => {
        if (values[variable] === undefined || values[variable] === null)
            console.log(`${chalk.greenBright("name")}: ${variable}    ${chalk.greenBright("value")}: ${chalk.redBright("Not Set")}   ${chalk.greenBright("type")}: ${chalk.redBright("Not Set")}`);
        else if (typeof values[variable] === "string" && values[variable].split(" ").length > 1)
            console.log(`${chalk.greenBright("name")}: ${variable}    ${chalk.greenBright("value")}: "${values[variable]}"   ${chalk.greenBright("type")}: ${typeof values[variable]}`);
        else
            console.log(`${chalk.greenBright("name")}: ${variable}    ${chalk.greenBright("value")}: ${values[variable]}   ${chalk.greenBright("type")}: ${typeof values[variable]}`);
    });

}