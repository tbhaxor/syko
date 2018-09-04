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