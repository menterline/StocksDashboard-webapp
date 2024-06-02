export class DailyDataNode {
  readonly dailyData: DailyData;
  readonly date: Date;
  constructor(dailyData: DailyData, date: Date) {
    this.dailyData = dailyData;
    this.date = date;
  }

  getDailyData(): DailyData {
    return this._dailyData;
  }

  getDate(): Date {
    return this._date;
  }
}
