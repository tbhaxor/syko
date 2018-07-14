"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var help_1 = require("./help");
var chalk_1 = require("chalk");
exports.default = (function (args, values) {
    var varibles = args.splice(1);
    if (varibles[0] === undefined || varibles[0] === "?") {
        help_1.default.printDump();
        return;
    }
    varibles.forEach(function (variable) {
        if (values[variable] === undefined || values[variable] === null)
            console.log(chalk_1.default.greenBright("name") + ": " + variable + "    " + chalk_1.default.greenBright("value") + ": " + chalk_1.default.redBright("Not Set") + "   " + chalk_1.default.greenBright("type") + ": " + chalk_1.default.redBright("Not Set"));
        else if (typeof values[variable] === "string" && values[variable].split(" ").length > 1)
            console.log(chalk_1.default.greenBright("name") + ": " + variable + "    " + chalk_1.default.greenBright("value") + ": \"" + values[variable] + "\"   " + chalk_1.default.greenBright("type") + ": " + typeof values[variable]);
        else
            console.log(chalk_1.default.greenBright("name") + ": " + variable + "    " + chalk_1.default.greenBright("value") + ": " + values[variable] + "   " + chalk_1.default.greenBright("type") + ": " + typeof values[variable]);
    });
});
//# sourceMappingURL=describe.js.map