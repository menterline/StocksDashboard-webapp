export type TickerDataResponseNode = {
  ticker: string;
  data: Array<{
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    date: string;
  }>;
};
