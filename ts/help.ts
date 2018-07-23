import command from './commands';
import chalk from 'chalk';

interface HelpStructure {
    command: string;
    type: string;
    acceptsArgs: boolean;
    minArgs: number;
    maxArgs: number;
    helpText: string;
    usage: string;
}

class Help {
    private static helpText: Array<HelpStructure> = [
        {
            command: command.globals.help,
            type: "global",
            acceptsArgs: false,
            maxArgs: 0,
            minArgs: 0,
            helpText: "Shows this help message",
            usage: "?"
        },
        {
            command: command.repl.describe,
            type: "repl",
            acceptsArgs: true,
            minArgs: 1,
            maxArgs: 1,
            helpText: "Describes a variable",
            usage: "describe myVar\n describe ?",
        },
        {
            command: command.globals.clear,
            type: "global",
            acceptsArgs: false,
            minArgs: 0,
            maxArgs: 0,
            helpText: "Clears the console output",
            usage: "clear",
        }
    ];

    public static printAll(): void {
        // Global Commands
        console.log("-=[ " + chalk.cyanBright("Global Commands") + " ]=-");
        this.helpText.forEach(obj => {
            if (obj.type === "global") {
                console.log(`\t${chalk.yellowBright(obj.command)}\t\t${chalk.green(obj.helpText)}`);
            }
        });

        // REPL commands
        console.log("-=[ " + chalk.cyanBright("REPL Commands") + " ]=-");
        this.helpText.forEach(obj => {
            if (obj.type === "repl") {
                if (obj.command.length > 6)
                    console.log(`\t${chalk.yellow(obj.command)}\t${chalk.green(obj.helpText)}`);
                else
                    console.log(`\t${chalk.yellow(obj.command)}\t\t${chalk.green(obj.helpText)}`);
            }
        });
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
}

export default Help;