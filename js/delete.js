"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var help_1 = require("./help");
var figures_1 = require("figures");
var chalk_1 = require("chalk");
exports.default = (function (args, values) {
    var variables = args.splice(1);
    if (variables.length === 0 || variables[0] === "?") {
        help_1.default.printDelete();
        return values;
    }
    variables.forEach(function (value) {
        if (values[value] === undefined || values[value] === null)
            console.log("variable: " + chalk_1.default.yellow(value) + "   " + figures_1.play + "    " + chalk_1.default.redBright("Not Set"));
        else {
            delete values[value];
            console.log("variable: " + chalk_1.default.yellow(value) + "   " + figures_1.play + "    " + chalk_1.default.greenBright("Deleted"));
        }
    });
    return values;
});
//# sourceMappingURL=delete.js.map