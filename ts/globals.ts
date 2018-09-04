export function isContaining(collection: Array<any>, item: any): Boolean {
    return collection.indexOf(item) != -1;
}

export enum CommandType { GLOBAL, REPL }