import fs from 'fs'

export class CsvFileReader {
    data: string[][] = [];
    constructor(public filename: string) { }
    // convert the string of matches into a 2d array of match info
    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split("\n").map((row: string): string[] => row.split(","))
    }
}