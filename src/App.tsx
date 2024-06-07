import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { DailyData } from "./components/DailyData";
import { Tickers } from "./models/Ticker";

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <DailyData
          tickers={new Tickers(["ENV", "IBM", "AMZN"])}
          chartTitle="Stocks Closing Price"
        />
        <DailyData
          tickers={new Tickers(["Bitcoin", "Ethereum"])}
          chartTitle="Cryptocurrency Closing Price"
        />
      </div>
      <div className="flex flex-row">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
