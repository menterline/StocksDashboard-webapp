import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { TickerData } from "../models/TickerData";
HighchartsAccessibility(Highcharts);

export const DailyDataChart = (props: {
  tickerData: TickerData[];
  chartTitle: string;
}) => {
  const chartOptions = {
    chart: {
      type: "line",
    },
    title: {
      text: props.chartTitle,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Close Price",
      },
    },
    series: props.tickerData.map((data) => ({
      name: data.getTicker(),
      data: data
        .getDailyDataNodes()
        .map((dailyData) => [
          dailyData.getDate().getTime(),
          dailyData.getClose(),
        ]),
    })),
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
