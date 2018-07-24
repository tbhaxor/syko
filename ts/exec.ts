import { execSync, exec, spawn, spawnSync } from "child_process";
import { VariableType } from "./Interfaces";
import helper from "./help";
import { isContaining } from "./globals";
import chalk from "chalk";
import set from "./set";

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
        console.log(chalk.redBright(`Error: Can't execute ${fullCmd} `));
        return vars;
    }

    if (savesTo === null) {
        console.log(x.stdout.toString().split("\n").filter(Boolean).join("\n"));
    } else {
        savesTo.forEach((variable: any) => {
            vars = set(["set", variable, x.stdout.toString()], vars);
        });
    }

    return vars;
}