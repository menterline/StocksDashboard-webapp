import { DailyDataNode } from "./DailyDataNode";
import { TickerDataResponseNode } from "./TickerDataResponseNode";

export class TickerData {
  readonly ticker: string;
  readonly data: Array<DailyDataNode>;
  constructor(ticker: string, dailyData: DailyDataNode[]) {
    this.ticker = ticker;
    this.data = dailyData;
  }

  getTicker(): string {
    return this.ticker;
  }

  getDailyDataNodes(): Array<DailyDataNode> {
    return this.data;
  }

  static fromTickerDailyTimeSeriesResponse(
    response: TickerDataResponseNode
  ): TickerData {
    //convert response into TickerData
    return new TickerData(
      response.ticker,
      response.data.map(
        (dailyData) =>
          new DailyDataNode(
            dailyData.open,
            dailyData.high,
            dailyData.low,
            dailyData.close,
            dailyData.volume,
            new Date(dailyData.date)
          )
      )
    );
  }
}
