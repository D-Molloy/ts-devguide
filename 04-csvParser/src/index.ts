import fs from 'fs';

// convert the string of matches into a 2d array of match info
const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split("\n").map((row: string): string[] => row.split(","))

// index - value
// 0 - match date
// 1 - home team
// 2 - away team
// 3 - home score
// 4 - away score
// 5 - winner (H || A || D)
// 6 - ref


const homeWin = "H",
    awayWin = "A",
    draw = "D";
let manUnitedWins = 0
for (let match of matches) {
    // BAD CODE - Comparing magic strings: difficult for others to grok (eg - what is H or A)
    if ((match[1] === "Man United" && match[5] === homeWin) || (match[2] === "Man United" && match[5] === awayWin)) {
        manUnitedWins++
    }
}

console.log(`Manchester United wins: ${manUnitedWins}`)