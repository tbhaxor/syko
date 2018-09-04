"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var help_1 = require("./help");
var globals_1 = require("./globals");
var chalk_1 = require("chalk");
var set_1 = require("./set");
exports.default = (function (args, vars) {
    var command = args[1];
    var commandArgs = args.splice(2);
    var savesTo;
    if (globals_1.isContaining(commandArgs, "save-to")) {
        savesTo = commandArgs.splice(commandArgs.indexOf("save-to") + 1);
    }
    else {
        savesTo = null;
    }
    if (command.length === 0 || command === "?" || (savesTo != null && savesTo.length === 0)) {
        help_1.default.printExec();
        return vars;
    }
    var actCommArg = commandArgs.reverse().splice(commandArgs.indexOf("save-to") + 1).reverse();
    var x = child_process_1.spawnSync(command, actCommArg, {
        shell: true,
    });
    var fullCmd = command + " " + actCommArg.join(" ");
    if (x.stderr.toString() !== "") {
        console.log(chalk_1.default.redBright("Error: Can't execute \"" + fullCmd + "\" "));
        return vars;
    }
    if (savesTo === null) {
        console.log(x.stdout.toString().split("\n").filter(Boolean).join("\n"));
    }
    else {
        var output = x.stdout.toString();
        if (output.indexOf("\n") !== -1) {
            output = output.split("\n").filter(Boolean);
        }
        savesTo.forEach(function (variable) {
            vars = set_1.default(["set", variable, output], vars);
        });
    }
    return vars;
});
//# sourceMappingURL=exec.js.map