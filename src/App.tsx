import { ThemeProvider } from "@mui/material";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <AboutMe />
        </div>
        {/* <div className="flex flex-row">
        <DailyData
          tickers={new Tickers(["ENV", "IBM", "AMZN"])}
          chartTitle="Stocks Closing Price"
        />
        <DailyData
          tickers={new Tickers(["Bitcoin", "Ethereum"])}
          chartTitle="Cryptocurrency Closing Price"
        />
      </div> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
