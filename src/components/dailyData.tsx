import { useQuery } from "react-query";
import { Tickers } from "../models/Ticker";
import React, { useEffect } from "react";
import { TickerData } from "../models/TickerData";
import { testData } from "../test/resources/test_daily_data";
import { DailyDataChart } from "./DailyDataChart";
import { TickerDataResponseNode } from "../models/TickerDataResponseNode";

type Props = {
  tickers: Tickers;
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

  useEffect(
    () =>
      setTickerData([
        TickerData.fromTickerDailyTimeSeriesResponse(testData[0]),
      ]),
    []
  );
  //useQuery(["tickers", props.tickers], () => fetchData(props.tickers))

  console.log(tickerData);
  return <div>{tickerData && <DailyDataChart tickerData={tickerData} />}</div>;
};
