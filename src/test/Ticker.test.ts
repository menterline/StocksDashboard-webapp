import { Tickers } from "../models/Ticker";
import { describe, it, expect } from "vitest";
describe("TickerListTests", () => {
  it("returns empty string if no tickers given", () => {
    const myTickers: Tickers = new Tickers([]);
    expect(myTickers.convertToURLParams()).toEqual("");
  });
  it('returns single url param', () => {
    const myTickers: Tickers = new Tickers(['ENV'])
    expect(myTickers.convertToURLParams()).toEqual("tickers=ENV")
  });
  it('returns 3 url params', () => {
    const myTickers: Tickers = new Tickers(['ENV', 'IBM', 'AMZN'])
    expect(myTickers.convertToURLParams()).toEqual("tickers=ENV&tickers=IBM&tickers=AMZN")
  })
});
