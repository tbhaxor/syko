import { spawnSync } from "child_process";
import { VariableType } from "./Interfaces";

export default (args: Array<string>, vars: VariableType): VariableType => {
    let a = args.splice(1);
    if (a.length === 0 || a[0] === "?") {

    }
    // var command = spawnSync();
    // console.log(data.toString());
    return vars;
}