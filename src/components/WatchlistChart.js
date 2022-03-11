
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
import chart_ from "../chart_config";

function WatchListChart(props) {
    const [status, setStatus] = useState()
    const [series, setSeries] = useState([{
        // type: 'area',
        // name: 'XYZ MOTORS',
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
        type: 'area',
        name: props.name,
        data: series.prices
    }]
    // chart_.options.fill.colors = props.colorChange
    // ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
    const chartConfig = {
        ...chart_.options,
        ["fill"]: {
            type: 'gradient',
            colors: props.colorChange,
            gradient: {
                shadeIntensity: 0.2,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [10, 100]
            }
        },
        ["stroke"]: {
            curve: 'smooth',
            width: 3,
            colors: "none"
        },

    }


    return (
        <>
            <Chart options={chartConfig} series={inputSeries} width="100%" height={150} />
        </>
    )
}

export default WatchListChart