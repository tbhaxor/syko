/**
 * @name globals.ts
 * @description The entry point of the interpreter
 * @returns NOTHING
 *
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */

// exporting the function
export function isContaining(collection: Array<any>, item: any): Boolean {
    return collection.indexOf(item) != -1;
}

// exporting an enum
export enum CommandType { GLOBAL, REPL }