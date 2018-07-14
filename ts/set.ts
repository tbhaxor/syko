import helper from "./help";
import { VariableType } from "./Interfaces";
import chalk from "chalk";

function isNumber(value: string): boolean {
    return /^[0-9]+$/.test(value);
}

function isQuoted(value: string): boolean {
    return /^'[^']*'$/.test(value) || /^"[^"]*"$/.test(value);
}

function countQuotes(values: Array<string>): number {
    let counter: number = 0;
    let quoteType: string = values[0][0];
    values.forEach(value => {
        value.split("").forEach(char => {
            if (char === quoteType) {
                counter++;
            }
        })
    });
    return counter;
}

function bulkyIsNumber(values: Array<string>): boolean {
    values.forEach(val => {
        if (!isNumber(val)) {
            return false;
        }
    });
    return true;
}

export default (args: Array<string>, values: VariableType): VariableType => {
    let variable: any = args[1];
    let values_: Array<string> = args.splice(2);

    if (variable === undefined || variable === "?") {
        helper.printSet();
        return values;
    }

    if (values_.length === 1) {
        let v: any = values_[0];
        if (!isNumber(v)) {
            values[variable] = v;
            if (isQuoted(v))
                values[variable] = values[variable].slice(1, -1);
        } else {
            values[variable] = Number(v);
        }
    } else {

        if (bulkyIsNumber(values_)) {
            values[variable] = eval("[" + values_.join(", ") + "]");
        } else {
            let count = countQuotes(values_);
            if (count % 2 !== 0) {
                let errIndex = values_.join(" ").indexOf(values_[0][0], 1);
                console.log(chalk.redBright("Invalid syntax at index" + errIndex));
            } else if (count === 2) {
                values[variable] = values_.join(" ").slice(1, -1);
            }

        }

    }
    return values;

}