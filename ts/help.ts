import command from './commands';
import chalk from 'chalk';
import { HelpStructure } from './Interfaces';
import { CommandType } from "./globals";

class Help {
    // function to return all detail of the command
    public static getCommandDetail(cmd: string) {
        this.helpText.forEach((help: HelpStructure) => {
            if (help.command === cmd)
                return help;
        });
    }

    private static helpText: Array<HelpStructure> = [
        //#region GLOBAL COMMANDS  
        {
            command: command.globals.help,
            type: CommandType.GLOBAL,
            acceptsArgs: false,
            maxArgs: 0,
            minArgs: 0,
            helpText: "Shows this help message",
            usage: `${command.globals.help}`
        },
        {
            command: command.globals.clear,
            type: CommandType.GLOBAL,
            acceptsArgs: false,
            minArgs: 0,
            maxArgs: 0,
            helpText: "Clears the console output",
            usage: `${command.globals.clear}`
        },
        {
            command: command.globals.exit,
            type: CommandType.GLOBAL,
            acceptsArgs: false,
            minArgs: 0,
            maxArgs: 1,
            helpText: "Exits out from terminal",
            usage: `${command.globals.exit}`
        },
        {
            command: command.globals.lic,
            acceptsArgs: false,
            helpText: "Prints license",
            maxArgs: 0,
            type: CommandType.GLOBAL,
            usage: `${command.globals.lic}`,
            minArgs: 0
        },
        {
            command: command.globals.info,
            acceptsArgs: false,
            helpText: "Prints information about the program",
            maxArgs: 0,
            type: CommandType.GLOBAL,
            usage: `${command.globals.lic}`,
            minArgs: 0
        },
        //#endregion

        //#region REPL COMMANDS  
        {
            command: command.repl.set,
            acceptsArgs: true,
            helpText: "Sets the variable in variable DB",
            maxArgs: "INFINITY",
            minArgs: 2,
            type: CommandType.REPL,
            usage: `${command.repl.set} ?\nset myVar 10\n${command.repl.set} myVar \"THIS IS STRING\"\n${command.repl.set} myArray 1 2 3 4 5 6`
        },
        {
            command: command.repl.delete,
            acceptsArgs: true,
            helpText: "Unsets the variable from variable DB",
            maxArgs: "INFINITY",
            minArgs: 1,
            type: CommandType.REPL,
            usage: `${command.repl.delete} ?\n${command.repl.delete} myVar1 ... myVar2`

        },
        {
            command: command.repl.copy,
            helpText: "Copies the content of one variable to others",
            usage: `${command.repl.copy} ?\n${command.repl.copy} mySrcVar myDestVar\n${command.repl.copy} mySrcVar myDestVar1 ... myDestVarn`,
            acceptsArgs: true,
            maxArgs: "INFINITY",
            minArgs: 2,
            type: CommandType.REPL
        },
        {
            command: command.repl.execute_external,
            acceptsArgs: true,
            minArgs: 1,
            type: CommandType.REPL,
            helpText: "Executes the external system command.\n\t\t\tAlso saves to a variable is used " + chalk.inverse("save-to") + " argument",
            maxArgs: "INFINITY",
            usage: `${command.repl.execute_external} ?\n${command.repl.execute_external} ping google.com\n${command.repl.execute_external} ping google.com save-to myVar`
        },
        {
            command: command.repl.show,
            acceptsArgs: true,
            maxArgs: "INFINITY",
            minArgs: 1,
            helpText: "Shows the content of variable in pretty format",
            type: CommandType.REPL,
            usage: `${command.repl.show} ?\n${command.repl.show} myVar\n${command.repl.show} myVar1 ... myVarn`
        },
        {
            command: command.repl.describe,
            type: CommandType.REPL,
            acceptsArgs: true,
            minArgs: 1,
            maxArgs: 1,
            helpText: "Describes a variable",
            usage: `${command.repl.describe} ?\n${command.repl.describe} myVar1 ... myVarn`,
        },
        //#endregion
    ];

    public static printAll(): void {
        // Global Commands
        console.log("-=[ " + chalk.cyanBright("Global Commands") + " ]=-");
        this.helpText.forEach(obj => {
            if (obj.type === CommandType.GLOBAL) {
                console.log(`\t${chalk.yellowBright(obj.command)}\t\t${chalk.green(obj.helpText)}`);
            }
        });

        // REPL commands
        console.log("-=[ " + chalk.cyanBright("REPL Commands") + " ]=-");
        this.helpText.forEach(obj => {
            if (obj.type === CommandType.REPL) {
                if (obj.command.length > 6)
                    console.log(`\t${chalk.yellow(obj.command)}\t${chalk.green(obj.helpText)}`);
                else
                    console.log(`\t${chalk.yellow(obj.command)}\t\t${chalk.green(obj.helpText)}`);
            }
        });
        console.log("\n" + chalk.bold(chalk.blueBright("Note : ")) + "To view more about commands pass '?' as their first argument i.e " + chalk.inverse("exec ?") + " or just type the command and hit enter");
    }

    public static printCopy(): void {
        console.log("COPY HELP");
    }

    public static printDump(): void {
        console.log("DUMP HELP");
    }

    public static printSet(): void {
        console.log("SET HELP");
    }
    public static printExec(): void {
        console.log("EXEC HELP");
    }
    public static printDelete(): void {
        console.log("DELETE HELP");
    }
    public static printShow(): void {
        console.log("SHOW HELP");
    }
}

export default Help;