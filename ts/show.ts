import { VariableType } from "./Interfaces";
import helper from "./help";
import chalk from "chalk";

export default (args: Array<string>, vars: VariableType): void => {
    var __var__: string = args[1];

    if (__var__ == undefined || __var__ == "?") {
        helper.printShow();
        return;
    }

    if (vars[__var__] == undefined || vars[__var__] == null) {
        console.log(chalk.red("Variable not set"));
    } else {
        if (typeof vars[__var__] == "object") {
            vars[__var__].forEach((element: any) => {
                console.log(element);
            });
        }
        else {
            console.log(vars[__var__]);
        }
    }
    return;
}