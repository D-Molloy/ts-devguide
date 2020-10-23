import { MatchData } from "./MatchData";
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { HtmlReport } from './reportTargets/HtmlReport'


export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    // prior to declaring the static method, we could only call buildAndPrintReport after creating an instance of Summary
    // the static method allows it to be called  off the class itself
    // static printHello(){
    //     console.log('hi')
    // }
    // Summary.printHello() //hi
    static winsAnalysisWithHtmlReport(teamName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport()
        )
    }


    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }
    // references to other object - 
    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}