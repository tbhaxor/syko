/**
 * @name copy.ts
 * @description module to copy the content of variable to others
 * @returns New State of variables
 * 
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */
import { VariableType } from "./Interfaces";
import set from "./set";
import helper from "./help";

export default (args: Array<string>, values: VariableType): VariableType => {
    //variable to be copied
    let variable: string = args[1];

    // variables to store copied data
    let copy: Array<string> = args.splice(2);

    // checking for if variable to be copied is not set or set to ? or not copying variable found
    if (variable === undefined || variable === "?" || copy.length === 0) {
        helper.printCopy();   // print help for copy
        return values;  // return original state
    }

    // for all copying variables traversing and setting the value
    copy.forEach(v => {
        values = set(["set", v, values[variable]], values);
    });

    // returning the new state
    return values;
}