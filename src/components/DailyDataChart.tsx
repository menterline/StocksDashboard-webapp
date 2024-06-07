import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { TickerData } from "../models/TickerData";
HighchartsAccessibility(Highcharts);

//TODO want to make the type of data to show configurable - so this should take a function
//that will be performed on each node.  E.g. prop.getData = (node) => node.getClose();
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
