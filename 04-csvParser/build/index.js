"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// before implementing static method on MatchReader
// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the DataReader interface
// const matchReader = new MatchReader(csvFileReader)
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// ----------
var consoleSummary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Liverpool"), new ConsoleReport_1.ConsoleReport());
consoleSummary.buildAndPrintReport(matchReader.matches);
var htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport("Liverpool");
// Before adding staticmethod
// const htmlSummary = new Summary(
//     new WinsAnalysis("Man United"),
//     new HtmlReport()
// )
htmlSummary.buildAndPrintReport(matchReader.matches);
/**
 * for the file in /inheritance
 */
// import { MatchReader } from './MatchReader'
// import { MatchResult } from './MatchResult'
// const reader = new MatchReader('football.csv')
// reader.read()
// let manUnitedWins = 0
// for (let match of reader.data) {
//     // BAD CODE - Comparing magic strings: difficult for others to grok (eg - what is H or A)
//     if ((match[1] === "Man United" && match[5] === MatchResult.HomeWin) || (match[2] === "Man United" && match[5] === MatchResult.AwayWin)) {
//         manUnitedWins++
//     }
// }
// console.log(`Manchester United wins: ${manUnitedWins}`)
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
