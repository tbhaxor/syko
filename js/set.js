"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var help_1 = require("./help");
var chalk_1 = require("chalk");
function isNumber(value) {
    return /^[0-9]+$/.test(value);
}
function isQuoted(value) {
    return /^'[^']*'$/.test(value) || /^"[^"]*"$/.test(value);
}
function countQuotes(values) {
    var counter = 0;
    var quoteType = values[0][0];
    values.forEach(function (value) {
        value.split("").forEach(function (char) {
            if (char === quoteType) {
                counter++;
            }
        });
    });
    return counter;
}
function bulkyIsNumber(values) {
    values.forEach(function (val) {
        if (!isNumber(val)) {
            return false;
        }
    });
    return true;
}
exports.default = (function (args, values) {
    var variable = args[1];
    var values_ = args.splice(2);
    if (variable === undefined || variable === "?") {
        help_1.default.printSet();
        return values;
    }
    if (values_.length === 1) {
        var v = values_[0];
        if (!isNumber(v)) {
            values[variable] = v;
            if (isQuoted(v))
                values[variable] = values[variable].slice(1, -1);
        }
        else {
            values[variable] = Number(v);
        }
    }
    else {
        if (bulkyIsNumber(values_)) {
            values[variable] = eval("[" + values_.join(", ") + "]");
        }
        else {
            var count = countQuotes(values_);
            if (count % 2 !== 0) {
                var errIndex = values_.join(" ").indexOf(values_[0][0], 1);
                console.log(chalk_1.default.redBright("Invalid syntax at index" + errIndex));
            }
            else if (count === 2) {
                values[variable] = values_.join(" ").slice(1, -1);
            }
        }
    }
    return values;
});
//# sourceMappingURL=set.js.map