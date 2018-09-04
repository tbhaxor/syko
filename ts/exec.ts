/**
 * @name exec.ts
 * @description The external command executing module
 * @returns New variable state
 *
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */

// importing modules
import { spawnSync } from "child_process";
import { VariableType } from "./Interfaces";
import helper from "./help";
import { isContaining } from "./globals";
import chalk from "chalk";
import set from "./set";

// default exporting the function with return type of VariableType
export default (args: Array<string>, vars: VariableType): VariableType => {

    // building data
    let command = args[1];
    let commandArgs = args.splice(2);

    // making saving argument functionality
    var savesTo: any;
    if (isContaining(commandArgs, "save-to")) {
        savesTo = commandArgs.splice(commandArgs.indexOf("save-to") + 1);
    } else {
        savesTo = null;
    }

    // validating savesTo
    // validating input
    if (command.length === 0 || command === "?" || (savesTo != null && savesTo.length === 0)) {
        helper.printExec();
        return vars;
    }
    // getting command actual args
    let actCommArg = commandArgs.reverse().splice(commandArgs.indexOf("save-to") + 1).reverse();

    // executing the command
    var x = spawnSync(command, actCommArg, {
        shell: true,
    });

    // printing error if found error and returning
    let fullCmd: string = command + " " + actCommArg.join(" ");
    if (x.stderr.toString() !== "") {
        console.log(chalk.redBright(`Error: Can't execute "${fullCmd}" `));
        return vars;
    }

    // if save-to is null then echo the output, otherwise assign to variables
    if (savesTo === null) {
        console.log(x.stdout.toString().split("\n").filter(Boolean).join("\n"));
    } else {
        var output: any = x.stdout.toString();

        // split and filter out empty string when there exists "\n"
        if (output.indexOf("\n") !== -1) {
            output = output.split("\n").filter(Boolean);
        }

        // if save-to is passed then set to the output to the variables passed
        savesTo.forEach((variable: any) => {
            vars = set(["set", variable, output], vars);
        });
    }

    // returning the variable state
    return vars;
}