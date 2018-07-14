import { VariableType } from "./Interfaces";
import set from "./set";
import helper from "./help";

export default (args: Array<string>, values: VariableType): VariableType => {
    let variable: string = args[1];
    let copy: Array<string> = args.splice(2);

    if (variable === undefined || variable === "?" || copy.length === 0) {
        helper.printCopy();
        return values;
    }

    copy.forEach(v => {
        values = set(["set", v, values[variable]], values);
    });

    return values;
}