export class DailyDataNode {
  readonly open: number;
  readonly high: number;
  readonly low: number;
  readonly close: number;
  readonly volume: number;
  readonly date: Date;
  constructor(
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    date: Date
  ) {
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
    this.volume = volume;
    this.date = date;
  }

  getOpen(): number {
    return this.open;
  }

  getHigh(): number {
    return this.high;
  }

  getLow(): number {
    return this.low;
  }

  getClose(): number {
    return this.close;
  }

  getVolume(): number {
    return this.volume;
  }

  getDate(): Date {
    return this.date;
  }
}
