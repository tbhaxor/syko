/**
 * @name help.ts
 * @description stores all the help related stuff
 * @returns NOTHING
 * 
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */

// importing all the modules needed
import command from './commands';
import chalk from 'chalk';
import { HelpStructure } from './Interfaces';
import { CommandType } from "./globals";
import { pointer, arrowRight } from "figures";

/**
 * @description Class for encapsulating all helping functions
 * @class Help
 */
class Help {
    // function to return all detail of the command
    public static getCommandDetail(cmd: string) {
        this.helpText.forEach((help: HelpStructure) => {
            if (help.command === cmd)
                return help;
        });
    }

    /**
     *  @description This is the main array of all helps
     *
     * @private
     * @static 
     * @type {Array<HelpStructure>}
     * @memberof Help
     */
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

    /**
     * @description Method to print all help i.e "?"
     * @static
     * @memberof Help
     */
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

    /**
     * @description Prints the help for copy command
     * @static
     * @memberof Help
     */
    public static printCopy(): void {
        console.log(`${chalk.yellowBright(`[ Help ]`)}`);
        console.log(`\tThe ${chalk.inverse(command.repl.copy)} command copies the content of one variable to one or more variables.`);
        console.log();
        console.log(`${chalk.blueBright(`[ Usage ]`)}`);
        console.log(`\t${command.repl.copy} {variable whose content to be copied} {variable 1} {variable 2} {variable 3} ... {variable n}`);
        console.log();
        console.log(`${chalk.magentaBright(`[ Example ]`)}`);
        console.log(`\t${pointer} Copy value of one variable to other (copy a to b)`);
        console.log(`\t\t${arrowRight} ${command.repl.copy} a b`);
        console.log(`\t${pointer} Copy value of one variable to more variables (copy a to b and c and d)`);
        console.log(`\t\t${arrowRight} ${command.repl.copy} a b c d`);
    }

    /**
     * @description Prints the help for describe command
     * @static
     * @memberof Help
     */
    public static printDump(): void {
        console.log(`${chalk.yellowBright(`[ Help ]`)}`);
        console.log(`\tThe ${chalk.inverse(command.repl.describe)} command describes about the name, value and type of one or more variables.`);
        console.log();
        console.log(`${chalk.blueBright(`[ Usage ]`)}`);
        console.log(`\t${command.repl.describe} {variable 1} {variable 2} {variable 3} ... {variable n}`);
        console.log();
        console.log(`${chalk.magentaBright(`[ Example ]`)}`);
        console.log(`\t${pointer} Describing one variable (describing the properties of a)`);
        console.log(`\t\t${arrowRight} ${command.repl.describe} a`);
        console.log(`\t${pointer} Describing more than one variables (describing the properties of a, b and c)`);
        console.log(`\t\t${arrowRight} ${command.repl.describe} a b c`);
    }

    /**
     * @description Prints the help for set command
     * @static
     * @memberof Help
     */
    public static printSet(): void {
        console.log(`${chalk.yellowBright(`[ Help ]`)}`);
        console.log(`\tThe ${chalk.inverse(command.repl.set)} command initializes a variable with value. It automatically converts type of value. For example if you enter 10 it will store as number if you will enter any name it will store as string or if you will add more value then it will store it as an array.`);
        console.log();
        console.log(`${chalk.blueBright(`[ Usage ]`)}`);
        console.log(`\t${command.repl.set} {variable name}  {value(s)}`);
        console.log();
        console.log(`${chalk.magentaBright(`[ Example ]`)}`);
        console.log(`\t${pointer} Setting a number variable (set num to 10)`);
        console.log(`\t\t${arrowRight} ${command.repl.set} num 10`);
        console.log(`\t${pointer} Setting a string variable (set name to terabyte)`);
        console.log(`\t\t${arrowRight} ${command.repl.set} name terabyte`);
        console.log(`\t${pointer} Setting an array variable (set nums to [1,2,3,4,5,6])`);
        console.log(`\t\t${arrowRight} ${command.repl.set} nums 1 2 3 4 5 6`);

    }

    /**
     * @description Prints the help for execute_external command
     * @static
     * @memberof Help
     */
    public static printExec(): void {
        console.log(`${chalk.yellowBright(`[ Help ]`)}`);
        console.log(`\tThe ${chalk.inverse(command.repl.execute_external)} command executes the external command and prints it on the console after its completed its execution. Also saves the output to a variable splitting by '\\n' char it save-to if passed in argument`);
        console.log();
        console.log(`${chalk.blueBright(`[ Usage ]`)}`);
        console.log(`\t${command.repl.execute_external} {command [args]}  [save-to {variable}]`);
        console.log();
        console.log(`${chalk.magentaBright(`[ Example ]`)}`);
        console.log(`\t${pointer} Executing a command (show the output of ls command)`);
        console.log(`\t\t${arrowRight} ${command.repl.execute_external} ls`);
        console.log(`\t${pointer} Executing a command with its arguments (show the output of ls -la command)`);
        console.log(`\t\t${arrowRight} ${command.repl.execute_external} ls -la`);
        console.log(`\t${pointer} Executing a command with its arguments and save it to a variable(save the output of ls -la command to output)`);
        console.log(`\t\t${arrowRight} ${command.repl.execute_external} ls -la save-to output`);
    }

    /**
     * @description Prints the help for delete command
     * @static
     * @memberof Help
     */
    public static printDelete(): void {
        console.log(`${chalk.yellowBright(`[ Help ]`)}`);
        console.log(`\tThe ${chalk.inverse(command.repl.delete)} command deletes the variable from the big container of set values`);
        console.log();
        console.log(`${chalk.blueBright(`[ Usage ]`)}`);
        console.log(`\t${command.repl.delete} {variable 1} {variable 2} {variable 3} ... {variable n}`);
        console.log();
        console.log(`${chalk.magentaBright(`[ Example ]`)}`);
        console.log(`\t${pointer} Deleting a variable (delete a)`);
        console.log(`\t\t${arrowRight} ${command.repl.delete} a`);
        console.log(`\t${pointer} Deleting more than one variables (delete a, b, c, and d)`);
        console.log(`\t\t${arrowRight} ${command.repl.delete} a b c d`);
    }

    /**
     * @description Prints the help for show command
     * @static
     * @memberof Help
     */
    public static printShow(): void {
        console.log(`${chalk.yellowBright(`[ Help ]`)}`);
        console.log(`\tThe ${chalk.inverse(command.repl.show)} command prints the value of the variable set in the variable container. Also it prints the values of an array linewise`);
        console.log();
        console.log(`${chalk.blueBright(`[ Usage ]`)}`);
        console.log(`\t${command.repl.show} {variable}`);
        console.log();
        console.log(`${chalk.magentaBright(`[ Example ]`)}`);
        console.log(`\t${pointer} Showing the value of a variable (print the value of num)`);
        console.log(`\t\t${arrowRight} ${command.repl.show} num`);
    }
}

// exporting the Help class
export default Help;