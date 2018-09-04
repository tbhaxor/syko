"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isContaining(collection, item) {
    return collection.indexOf(item) != -1;
}
exports.isContaining = isContaining;
var CommandType;
(function (CommandType) {
    CommandType[CommandType["GLOBAL"] = 0] = "GLOBAL";
    CommandType[CommandType["REPL"] = 1] = "REPL";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
//# sourceMappingURL=globals.js.map