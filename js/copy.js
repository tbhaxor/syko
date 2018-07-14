"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var set_1 = require("./set");
var help_1 = require("./help");
exports.default = (function (args, values) {
    var variable = args[1];
    var copy = args.splice(2);
    if (variable === undefined || variable === "?" || copy.length === 0) {
        help_1.default.printCopy();
        return values;
    }
    copy.forEach(function (v) {
        values = set_1.default(["set", v, values[variable]], values);
    });
    return values;
});
//# sourceMappingURL=copy.js.map