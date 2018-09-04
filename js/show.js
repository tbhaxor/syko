"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var help_1 = require("./help");
var chalk_1 = require("chalk");
exports.default = (function (args, vars) {
    var __var__ = args[1];
    if (__var__ == undefined || __var__ == "?") {
        help_1.default.printShow();
        return;
    }
    if (vars[__var__] == undefined || vars[__var__] == null) {
        console.log(chalk_1.default.red("Variable not set"));
    }
    else {
        if (typeof vars[__var__] == "object") {
            vars[__var__].forEach(function (element) {
                console.log(element);
            });
        }
        else {
            console.log(vars[__var__]);
        }
    }
    return;
});
//# sourceMappingURL=show.js.map