
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
import chart_ from "../chart_config";

function WatchListChart(props) {
    const [status, setStatus] = useState()
    const [series, setSeries] = useState([{
        type: 'area',
        name: 'XYZ MOTORS',
      }])

    useEffect(() => {
        setStatus("loading")
        fetch(`https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=30&interval=daily`)
            .then((response) => response.json())
            .then((dailyprices) => {
                setSeries(dailyprices) 
                setStatus("success")
            })
            .catch((error) => {
                console.error(error)
                setStatus("error")
            })

    }, []);

    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "error") {
        return <div>Not Loading...</div>
    }
    const inputSeries = [{
        type : 'area',
        name : props.name,
        data: series.prices
    }]
    return (
        <>
            <Chart options={chart_.options} series={inputSeries} width="100%" height={160} />
        </>
    )
}

export default WatchListChart