import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'

// setting up a tuple for the return value from read
export type MatchData = [Date, string, string, number, number, MatchResult, string]

// <MatchData> - passing the type of generic to be used in the parent class (<T>)
export class MatchReader extends CsvFileReader<MatchData> {


    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, //"H" || "A"||"D"
            row[6]
        ]
    }
}