"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var commands_1 = require("./commands");
var chalk_1 = require("chalk");
var globals_1 = require("./globals");
var Help = (function () {
    function Help() {}
    Help.getCommandDetail = function (cmd) {
        this.helpText.forEach(function (help) {
            if (help.command === cmd)
                return help;
        });
    };
    Help.printAll = function () {
        console.log("-=[ " + chalk_1.default.cyanBright("Global Commands") + " ]=-");
        this.helpText.forEach(function (obj) {
            if (obj.type === globals_1.CommandType.GLOBAL) {
                console.log("\t" + chalk_1.default.yellowBright(obj.command) + "\t\t" + chalk_1.default.green(obj.helpText));
            }
        });
        console.log("-=[ " + chalk_1.default.cyanBright("REPL Commands") + " ]=-");
        this.helpText.forEach(function (obj) {
            if (obj.type === globals_1.CommandType.REPL) {
                if (obj.command.length > 6)
                    console.log("\t" + chalk_1.default.yellow(obj.command) + "\t" + chalk_1.default.green(obj.helpText));
                else
                    console.log("\t" + chalk_1.default.yellow(obj.command) + "\t\t" + chalk_1.default.green(obj.helpText));
            }
        });
        console.log("\n" + chalk_1.default.bold(chalk_1.default.blueBright("Note : ")) + "To view more about commands pass '?' as their first argument i.e " + chalk_1.default.inverse("exec ?") + " or just type the command and hit enter");
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
    Help.helpText = [{
            command: commands_1.default.globals.help,
            type: globals_1.CommandType.GLOBAL,
            acceptsArgs: false,
            maxArgs: 0,
            minArgs: 0,
            helpText: "Shows this help message",
            usage: "" + commands_1.default.globals.help
        },
        {
            command: commands_1.default.globals.clear,
            type: globals_1.CommandType.GLOBAL,
            acceptsArgs: false,
            minArgs: 0,
            maxArgs: 0,
            helpText: "Clears the console output",
            usage: "" + commands_1.default.globals.clear
        },
        {
            command: commands_1.default.globals.exit,
            type: globals_1.CommandType.GLOBAL,
            acceptsArgs: false,
            minArgs: 0,
            maxArgs: 1,
            helpText: "Exits out from terminal",
            usage: "" + commands_1.default.globals.exit
        },
        {
            command: commands_1.default.globals.lic,
            acceptsArgs: false,
            helpText: "Prints license",
            maxArgs: 0,
            type: globals_1.CommandType.GLOBAL,
            usage: "" + commands_1.default.globals.lic,
            minArgs: 0
        },
        {
            command: commands_1.default.globals.info,
            acceptsArgs: false,
            helpText: "Prints information about the program",
            maxArgs: 0,
            type: globals_1.CommandType.GLOBAL,
            usage: "" + commands_1.default.globals.lic,
            minArgs: 0
        },
        {
            command: commands_1.default.repl.set,
            acceptsArgs: true,
            helpText: "Sets the variable in variable DB",
            maxArgs: "INFINITY",
            minArgs: 2,
            type: globals_1.CommandType.REPL,
            usage: commands_1.default.repl.set + " ?\nset myVar 10\n" + commands_1.default.repl.set + " myVar \"THIS IS STRING\"\n" + commands_1.default.repl.set + " myArray 1 2 3 4 5 6"
        },
        {
            command: commands_1.default.repl.delete,
            acceptsArgs: true,
            helpText: "Unsets the variable from variable DB",
            maxArgs: "INFINITY",
            minArgs: 1,
            type: globals_1.CommandType.REPL,
            usage: commands_1.default.repl.delete + " ?\n" + commands_1.default.repl.delete + " myVar1 ... myVar2"
        },
        {
            command: commands_1.default.repl.copy,
            helpText: "Copies the content of one variable to others",
            usage: commands_1.default.repl.copy + " ?\n" + commands_1.default.repl.copy + " mySrcVar myDestVar\n" + commands_1.default.repl.copy + " mySrcVar myDestVar1 ... myDestVarn",
            acceptsArgs: true,
            maxArgs: "INFINITY",
            minArgs: 2,
            type: globals_1.CommandType.REPL
        },
        {
            command: commands_1.default.repl.execute_external,
            acceptsArgs: true,
            minArgs: 1,
            type: globals_1.CommandType.REPL,
            helpText: "Executes the external system command.\n\t\t\tAlso saves to a variable is used " + chalk_1.default.inverse("save-to") + " argument",
            maxArgs: "INFINITY",
            usage: commands_1.default.repl.execute_external + " ?\n" + commands_1.default.repl.execute_external + " ping google.com\n" + commands_1.default.repl.execute_external + " ping google.com save-to myVar"
        },
        {
            command: commands_1.default.repl.show,
            acceptsArgs: true,
            maxArgs: "INFINITY",
            minArgs: 1,
            helpText: "Shows the content of variable in pretty format",
            type: globals_1.CommandType.REPL,
            usage: commands_1.default.repl.show + " ?\n" + commands_1.default.repl.show + " myVar\n" + commands_1.default.repl.show + " myVar1 ... myVarn"
        },
        {
            command: commands_1.default.repl.describe,
            type: globals_1.CommandType.REPL,
            acceptsArgs: true,
            minArgs: 1,
            maxArgs: 1,
            helpText: "Describes a variable",
            usage: commands_1.default.repl.describe + " ?\n" + commands_1.default.repl.describe + " myVar1 ... myVarn",
        },
    ];
    return Help;
}());
exports.default = Help;
//# sourceMappingURL=help.js.map