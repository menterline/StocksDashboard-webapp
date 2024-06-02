export class TickerDailyTimeSeriesResponse {
  readonly data: TickerData[];
  constructor(data: TickerData[]) {
    this.data = data;
  }

  getData(): TickerData[] {
    return this._data;
  }
}
