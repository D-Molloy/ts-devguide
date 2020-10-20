"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// convert the string of matches into a 2d array of match info
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split("\n").map(function (row) { return row.split(","); });
// index - value
// 0 - match date
// 1 - home team
// 2 - away team
// 3 - home score
// 4 - away score
// 5 - winner (H || A || D)
// 6 - ref
var homeWin = "H", awayWin = "A", draw = "D";
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    // BAD CODE - Comparing magic strings: difficult for others to grok (eg - what is H or A)
    if ((match[1] === "Man United" && match[5] === homeWin) || (match[2] === "Man United" && match[5] === awayWin)) {
        manUnitedWins++;
    }
}
console.log("Manchester United wins: " + manUnitedWins);
