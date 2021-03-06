"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var help_1 = require("./help");
var set_1 = require("./set");
var readline_sync_1 = require("readline-sync");
var figures_1 = require("figures");
var commands_1 = require("./commands");
var describe_1 = require("./describe");
var delete_1 = require("./delete");
var copy_1 = require("./copy");
var exec_1 = require("./exec");
var show_1 = require("./show");
var variables = {};
var args;
var tmp;
console.clear();
console.log("Welcome to Syko Interpreter");
console.log("Current Version: v1.4.1");
console.log("Type ? for help\n");
while (true) {
    args = readline_sync_1.question(chalk_1.default.bold(figures_1.arrowRight) + " ").split(" ").filter(Boolean);
    if (args[0] === undefined) {
        continue;
    }
    tmp = args[0].toLowerCase();
    switch (tmp) {
        case commands_1.default.globals.clear:
            console.clear();
            break;
        case commands_1.default.globals.exit:
            process.exit(0);
            break;
        case commands_1.default.globals.help:
            help_1.default.printAll();
            break;
        case commands_1.default.globals.lic:
            console.log("MIT");
            break;
        case commands_1.default.globals.info:
            console.log(chalk_1.default.yellow("Syko Interpeter " + figures_1.pointer + " An easy to use and customisable interpreter"));
            console.log("Designed By : Gurkirat Singh");
            console.log("Platform : Cross Platform");
            console.log("Support Contact : tbhaxor@gmail.com");
            console.log("Visit " + chalk_1.default.inverse("https://tbhaxor.me/syko"));
            break;
        case commands_1.default.repl.set:
            variables = set_1.default(args, variables);
            break;
        case commands_1.default.repl.describe:
            describe_1.default(args, variables);
            break;
        case commands_1.default.repl.delete:
            variables = delete_1.default(args, variables);
            break;
        case commands_1.default.repl.copy:
            variables = copy_1.default(args, variables);
            break;
        case commands_1.default.repl.execute_external:
            variables = exec_1.default(args, variables);
            break;
        case commands_1.default.repl.show:
            show_1.default(args, variables);
            break;
        default:
            console.log(chalk_1.default.redBright("Invalid command"));
            break;
    }
    console.log();
}
//# sourceMappingURL=main.js.map