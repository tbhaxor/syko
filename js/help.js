"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = require("./commands");
var chalk_1 = require("chalk");
var Help = (function () {
    function Help() {
    }
    Help.printAll = function () {
        console.log("-=[ " + chalk_1.default.cyanBright("Global Commands") + " ]=-");
        this.helpText.forEach(function (obj) {
            if (obj.type === "global") {
                console.log("\t" + chalk_1.default.yellowBright(obj.command) + "\t\t" + chalk_1.default.green(obj.helpText));
            }
        });
        console.log("-=[ " + chalk_1.default.cyanBright("REPL Commands") + " ]=-");
        this.helpText.forEach(function (obj) {
            if (obj.type === "repl") {
                if (obj.command.length > 6)
                    console.log("\t" + chalk_1.default.yellow(obj.command) + "\t" + chalk_1.default.green(obj.helpText));
                else
                    console.log("\t" + chalk_1.default.yellow(obj.command) + "\t\t" + chalk_1.default.green(obj.helpText));
            }
        });
    };
    Help.printCopy = function () {
        console.log("COPY HELP");
    };
    Help.printDump = function () {
        console.log("DUMP HELP");
    };
    Help.printSet = function () {
        console.log("SET HELP");
    };
    Help.printExec = function () {
        console.log("EXEC HELP");
    };
    Help.printDelete = function () {
        console.log("DELETE HELP");
    };
    Help.helpText = [
        {
            command: commands_1.default.globals.help,
            type: "global",
            acceptsArgs: false,
            maxArgs: 0,
            minArgs: 0,
            helpText: "Shows this help message",
            usage: "?"
        },
        {
            command: commands_1.default.repl.describe,
            type: "repl",
            acceptsArgs: true,
            minArgs: 1,
            maxArgs: 1,
            helpText: "Describes a variable",
            usage: "describe myVar\n describe ?",
        },
        {
            command: commands_1.default.globals.clear,
            type: "global",
            acceptsArgs: false,
            minArgs: 0,
            maxArgs: 0,
            helpText: "Clears the console output",
            usage: "clear",
        }
    ];
    return Help;
}());
exports.default = Help;
//# sourceMappingURL=help.js.map