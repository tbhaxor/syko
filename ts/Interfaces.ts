/**
 * @name interfaces.ts
 * @description The entry point of the interpreter
 * @returns NOTHING
 *
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */

// importing modules
import { CommandType } from "./globals";

export interface VariableType {
    [key: string]: any;
}

export interface HelpStructure {
    command: string;
    type: CommandType;
    acceptsArgs: boolean;
    minArgs: number;
    maxArgs: any;
    helpText: string;
    usage: string;
}