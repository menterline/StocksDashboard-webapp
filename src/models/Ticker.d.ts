export class Tickers {
    readonly tickers: string[];

    constructor(tickers: string[]) {
        this.tickers = tickers;
    }
    
    convertToURLParams(): string {
        if (this.tickers.length === 0) return ""
        const paramString = this.tickers.map(ticker => `tickers=${ticker}`)
        return paramString.join("&")
    }
}

