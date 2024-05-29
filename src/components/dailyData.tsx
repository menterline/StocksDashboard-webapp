import { useQuery } from "react-query"

type Props = {
    tickers: string[]
}
export const DailyData = (props: Props) => {

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080')
    }

    return <div></div>
}