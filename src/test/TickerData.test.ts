import { describe, it, expect } from "vitest";
import { testData } from "./resources/test_daily_data";
import { TickerData } from "../models/TickerData";
import { TickerDataResponseNode } from "../models/TickerDataResponseNode";
describe("Test TickerData static constructor", () => {
  it("works", () => {
    const tickerData: TickerData = TickerData.fromTickerDailyTimeSeriesResponse(
      testData[0] as TickerDataResponseNode
    );

    expect(tickerData.getTicker()).toEqual("IBM");
    expect(tickerData.getDailyDataNodes()[0].getClose()).toEqual(168.2);
    expect(tickerData.getDailyDataNodes()[1].getClose()).toEqual(167.38);
  });
});
