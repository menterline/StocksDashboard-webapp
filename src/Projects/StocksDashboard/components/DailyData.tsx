import { useQuery } from "react-query";
import { Tickers } from "../Projects/StocksDashboard/models/Ticker";
import React from "react";
import { TickerData } from "../Projects/StocksDashboard/models/TickerData";
import { DailyDataChart } from "./DailyDataChart";
import { TickerDataResponseNode } from "../Projects/StocksDashboard/models/TickerDataResponseNode";

type Props = {
  tickers: Tickers;
  chartTitle: string;
};
export const DailyData = (props: Props) => {
  const [tickerData, setTickerData] = React.useState<TickerData[]>([]);
  const fetchData = async (tickers: Tickers) => {
    const tickerParams = tickers.convertToURLParams();
    const response = await fetch(
      `http://localhost:8080/timeSeriesDaily?${tickerParams}`
    );
    const tickerDataResponse =
      (await response.json()) as TickerDataResponseNode[];
    setTickerData(
      tickerDataResponse.map((data) =>
        TickerData.fromTickerDailyTimeSeriesResponse(data)
      )
    );
  };

  useQuery(["tickers", props.tickers], () => fetchData(props.tickers));

  return (
    <div>
      {tickerData && (
        <DailyDataChart tickerData={tickerData} chartTitle={props.chartTitle} />
      )}
    </div>
  );
};
