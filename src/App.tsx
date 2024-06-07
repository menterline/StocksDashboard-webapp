import "./App.css";
import { DailyData } from "./components/DailyData";
import { Tickers } from "./models/Ticker";

function App() {
  return <DailyData tickers={new Tickers(["ENV", "IBM", "AMZN"])} />;
}

export default App;
