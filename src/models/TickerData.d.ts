import { DailyData } from "./DailyData";
import { DailyDataNode } from "./DailyDataNode";

export class TickerData {
  readonly ticker: string;
  readonly dailyData: Array<DailyDataNode>;
  constructor(ticker: string, dailyData: DailyData[]) {
    this.ticker = ticker;
    this.dailyData = dailyData;
  }

  getTicker(): string {
    return this._ticker;
  }

  getDailyData(): Array<DailyDataNode> {
    return this._dailyData;
  }
}
