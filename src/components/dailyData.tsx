import { useQuery } from "react-query"
import { Tickers } from "../models/Ticker"
import { TickerDailyTimeSeriesResponse } from "../models/TickerDailyTimeSeriesResponse"
import React from "react"
import { TickerData } from "../models/TickerData"

type Props = {
    tickers: Tickers
}
export const DailyData = (props: Props) => {

    const [tickerData, setTickerData] = React.useState<TickerData[]>([]);
    const fetchData = async (tickers: Tickers) => {
        const tickerParams = tickers.convertToURLParams();
        const response = await fetch(`http://localhost:8080/timeSeriesDaily?${tickerParams}`)
        const tickerDataResponse = new TickerDailyTimeSeriesResponse(await response.json())
        setTickerData(tickerDataResponse.getData());
    }

    useQuery(["tickers", props.tickers], () => fetchData(props.tickers))

    console.log(tickerData)
    return <div></div>
}