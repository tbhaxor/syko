"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = require("./commands");
var chalk_1 = require("chalk");
var globals_1 = require("./globals");
var figures_1 = require("figures");
var Help = (function () {
    function Help() {
    }
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
        console.log("" + chalk_1.default.yellowBright("[ Help ]"));
        console.log("\tThe " + chalk_1.default.inverse(commands_1.default.repl.copy) + " command copies the content of one variable to one or more variables.");
        console.log();
        console.log("" + chalk_1.default.blueBright("[ Usage ]"));
        console.log("\t" + commands_1.default.repl.copy + " {variable whose content to be copied} {variable 1} {variable 2} {variable 3} ... {variable n}");
        console.log();
        console.log("" + chalk_1.default.magentaBright("[ Example ]"));
        console.log("\t" + figures_1.pointer + " Copy value of one variable to other (copy a to b)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.copy + " a b");
        console.log("\t" + figures_1.pointer + " Copy value of one variable to more variables (copy a to b and c and d)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.copy + " a b c d");
    };
    Help.printDump = function () {
        console.log("" + chalk_1.default.yellowBright("[ Help ]"));
        console.log("\tThe " + chalk_1.default.inverse(commands_1.default.repl.describe) + " command describes about the name, value and type of one or more variables.");
        console.log();
        console.log("" + chalk_1.default.blueBright("[ Usage ]"));
        console.log("\t" + commands_1.default.repl.describe + " {variable 1} {variable 2} {variable 3} ... {variable n}");
        console.log();
        console.log("" + chalk_1.default.magentaBright("[ Example ]"));
        console.log("\t" + figures_1.pointer + " Describing one variable (describing the properties of a)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.describe + " a");
        console.log("\t" + figures_1.pointer + " Describing more than one variables (describing the properties of a, b and c)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.describe + " a b c");
    };
    Help.printSet = function () {
        console.log("" + chalk_1.default.yellowBright("[ Help ]"));
        console.log("\tThe " + chalk_1.default.inverse(commands_1.default.repl.set) + " command initializes a variable with value. It automatically converts type of value. For example if you enter 10 it will store as number if you will enter any name it will store as string or if you will add more value then it will store it as an array.");
        console.log();
        console.log("" + chalk_1.default.blueBright("[ Usage ]"));
        console.log("\t" + commands_1.default.repl.set + " {variable name}  {value(s)}");
        console.log();
        console.log("" + chalk_1.default.magentaBright("[ Example ]"));
        console.log("\t" + figures_1.pointer + " Setting a number variable (set num to 10)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.set + " num 10");
        console.log("\t" + figures_1.pointer + " Setting a string variable (set name to terabyte)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.set + " name terabyte");
        console.log("\t" + figures_1.pointer + " Setting an array variable (set nums to [1,2,3,4,5,6])");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.set + " nums 1 2 3 4 5 6");
    };
    Help.printExec = function () {
        console.log("" + chalk_1.default.yellowBright("[ Help ]"));
        console.log("\tThe " + chalk_1.default.inverse(commands_1.default.repl.execute_external) + " command executes the external command and prints it on the console after its completed its execution. Also saves the output to a variable splitting by '\\n' char it save-to if passed in argument");
        console.log();
        console.log("" + chalk_1.default.blueBright("[ Usage ]"));
        console.log("\t" + commands_1.default.repl.execute_external + " {command [args]}  [save-to {variable}]");
        console.log();
        console.log("" + chalk_1.default.magentaBright("[ Example ]"));
        console.log("\t" + figures_1.pointer + " Executing a command (show the output of ls command)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.execute_external + " ls");
        console.log("\t" + figures_1.pointer + " Executing a command with its arguments (show the output of ls -la command)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.execute_external + " ls -la");
        console.log("\t" + figures_1.pointer + " Executing a command with its arguments and save it to a variable(save the output of ls -la command to output)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.execute_external + " ls -la save-to output");
    };
    Help.printDelete = function () {
        console.log("" + chalk_1.default.yellowBright("[ Help ]"));
        console.log("\tThe " + chalk_1.default.inverse(commands_1.default.repl.delete) + " command deletes the variable from the big container of set values");
        console.log();
        console.log("" + chalk_1.default.blueBright("[ Usage ]"));
        console.log("\t" + commands_1.default.repl.delete + " {variable 1} {variable 2} {variable 3} ... {variable n}");
        console.log();
        console.log("" + chalk_1.default.magentaBright("[ Example ]"));
        console.log("\t" + figures_1.pointer + " Deleting a variable (delete a)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.delete + " a");
        console.log("\t" + figures_1.pointer + " Deleting more than one variables (delete a, b, c, and d)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.delete + " a b c d");
    };
    Help.printShow = function () {
        console.log("" + chalk_1.default.yellowBright("[ Help ]"));
        console.log("\tThe " + chalk_1.default.inverse(commands_1.default.repl.show) + " command prints the value of the variable set in the variable container. Also it prints the values of an array linewise");
        console.log();
        console.log("" + chalk_1.default.blueBright("[ Usage ]"));
        console.log("\t" + commands_1.default.repl.show + " {variable}");
        console.log();
        console.log("" + chalk_1.default.magentaBright("[ Example ]"));
        console.log("\t" + figures_1.pointer + " Showing the value of a variable (print the value of num)");
        console.log("\t\t" + figures_1.arrowRight + " " + commands_1.default.repl.show + " num");
    };
    Help.helpText = [
        {
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