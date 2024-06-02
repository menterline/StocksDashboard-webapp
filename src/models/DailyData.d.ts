export class DailyData {
  readonly open: number;
  readonly high: number;
  readonly low: number;
  readonly close: number;
  readonly volume: number;

  constructor(
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number
  ) {
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
    this.volume = volume;
  }

  getOpen(): number {
    return this.open;
  }

  getHigh(): number {
    return this.high;
  }

  low(): number {
    return this.low;
  }

  close(): number {
    return this.close;
  }

  volume(): number {
    return this.volume;
  }
}
