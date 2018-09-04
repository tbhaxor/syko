/**
 * @name set.ts
 * @description The variable setting module
 * @returns New variable state
 *
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */


// importing modules
import helper from "./help";
import { VariableType } from "./Interfaces";
import chalk from "chalk";


/**
 * @description Function to check if the string is a number of not
 * @param {string} value
 * @returns {boolean}
 */
function isNumber(value: string): boolean {
    return /^[0-9]+$/.test(value);
}

/**
 * @description Function to check if string is quoted or not
 * @param {string} value
 * @returns {boolean}
 */
function isQuoted(value: string): boolean {
    return /^'[^']*'$/.test(value) || /^"[^"]*"$/.test(value);

}

/**
 * @description Function to count the number of quotes
 * @param {Array<string>} values
 * @returns {number}
 */
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

/**
 * @description
 * @param {Array<string>} values
 * @returns {boolean}
 */
function bulkyIsNumber(values: Array<string>): boolean {
    values.forEach(val => {
        if (!isNumber(val)) {
            return false;
        }
    });
    return true;
}

export default (args: Array<string>, vars: VariableType): VariableType => {
    // getting the variable name
    let variable: any = args[1];

    // getting an array of values
    let values_: Array<string> = args.splice(2);

    // checking if variable if not passed or it is "?"
    if (variable === undefined || variable === "?") {
        helper.printSet();  // show set command help
        return vars;  // return original variable state
    }

    // algo to set variable
    if (values_.length === 1) {

        // getting the first value if only one value is passed
        let v: any = values_[0];
        if (!isNumber(v)) {
            // if value is not of number
            vars[variable] = v; // set it as string
            if (isQuoted(v))  // if it is quoted
                vars[variable] = vars[variable].slice(1, -1); // remove quotes
        } else {
            vars[variable] = Number(v); // otherwise set as number
        }
    } else {

        if (bulkyIsNumber(values_)) { // if its bulky number i.e array of number
            vars[variable] = eval("[" + values_.join(", ") + "]");  // set array of numbers
        } else {
            let count = countQuotes(values_); // counting quotes
            if (count % 2 !== 0) { // if not even quotes
                let errIndex = values_.join(" ").indexOf(values_[0][0], 1); // get error index
                console.log(chalk.redBright("Invalid syntax at index" + errIndex));  // show invalid syntax error
            } else if (count === 2) { // otherwise set the value
                vars[variable] = values_.join(" ").slice(1, -1);
            }
        }
    }

    // return the changed state
    return vars;
}