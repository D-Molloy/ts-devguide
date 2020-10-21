"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    // BAD CODE - Comparing magic strings: difficult for others to grok (eg - what is H or A)
    if ((match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) || (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log("Manchester United wins: " + manUnitedWins);
// Bad Code
// const matches = fs.readFileSync('football.csv', {
//     encoding: 'utf-8'
// }).split("\n").map((row: string): string[] => row.split(","))
// index - value
// 0 - match date
// 1 - home team
// 2 - away team
// 3 - home score
// 4 - away score
// 5 - winner (H || A || D)
// 6 - ref
// // giving variable names is handy, but others would be inclined to delete 'draw'
// const homeWin = "H",
//     awayWin = "A",
//     draw = "D";
// Improvement over above, but confusing why its an object
// const MatchResult = {
//     HomeWin: "H",
//     AwayWin: "A",
//     Draw: "D"
// }
/**
 * ENUM
 */
// in TS, this is referred to as an Enum (enumeration)
// An object that store very closely related numbers or strings
//  Benefits of enums over objects:  purpose is to signal other engineers that this is a collection off closely related values
// possible to define enums without values
// must create values before code is compiled (i.e. can't fill in values later)
// Defining enums also creates a new Type (MatchResult)
// const printMatchResult = (match: string):MatchResult => {
//     if (match[5] === 'H') {
//         return MatchResult.HomeWin
//     }
//     return MatchResult.AwayWin
// }
// let manUnitedWins = 0
// for (let match of reader.data) {
//     // BAD CODE - Comparing magic strings: difficult for others to grok (eg - what is H or A)
//     if ((match[1] === "Man United" && match[5] === MatchResult.HomeWin) || (match[2] === "Man United" && match[5] === MatchResult.AwayWin)) {
//         manUnitedWins++
//     }
// }
// console.log(`Manchester United wins: ${manUnitedWins}`)
