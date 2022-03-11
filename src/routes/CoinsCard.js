import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from 'react-apexcharts'
import chart_ from "../chart_config";
import { Link } from "react-router-dom";


function CoinsCard() {
    const { id } = useParams();
    ///Charts//
    const [CoinDetails, setCoinDetails] = useState({}); // {} for empty object //else will be error
    const [CoinDetailsStatus, setCoinDetailsStatus] = useState(null)
    const [ChartDataStatus, setChartDataStatus] = useState(null)
    const [ChartDataLoaded, setChartDataLoaded] = useState(null)
    const [CoinName, setCoinName] = useState(null)
    const [series, setSeries] = useState([{
        type: 'area',
        name: 'XYZ MOTORS',
    }])
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState()

    const fetchCoinDetails = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=false`)
            .then((response) => response.json())
            .then((d) => {
                setCoinDetails(d.description)  //*down to one level above the required value
                setCoinName(d.name)
                setCoinDetailsStatus(true)

            })
            .catch((error) => {
                setStatus(false)
                console.error(error)
            })

    }

    const fetchChartData = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`)
            .then((response) => response.json())
            .then((dailyprices) => {
                setSeries(dailyprices)  //*down to one level above the required value
                setChartDataStatus(true)
            })
            .catch((error) => {
                console.error(error)
                setChartDataStatus(false)
            })
    }

    useEffect(() => {
        setChartDataLoaded(false)
        console.log(ChartDataLoaded)
        setStatus("loading")
        fetchCoinDetails();
        fetchChartData();
    }, []);


    useEffect(() => {
        if (CoinDetailsStatus && ChartDataStatus) {
            setChartDataLoaded(true);
            setStatus("success")
            setLoading(false)
        }
    }, [CoinDetailsStatus, ChartDataStatus])

    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "error") {
        return <div>Not Loading...</div>
    }
    console.log("series =>>", series)

    console.log(series.prices)
    const inputSeries = [{
        type: 'area',
        name: CoinName,
        data: series.prices
    }]
    function createMarkup() {
        return { __html: CoinDetails.en };
    }

    return (

        <>
            <h1>{CoinName}</h1>
            {ChartDataLoaded &&
                <div className="coincardchart">
                    <Chart options={chart_.options} series={inputSeries} width="1000px" height={450} />
                </div>
            }
            {/* <div>{CoinDetails.en}</div> */}
            <div className="coinDescription">
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <Link className="nav-link" to="/" style={{ textDecoration: 'none' }} className="buttonCSS_2">Back to Home</Link>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <nav>

            </nav>
        </>

    )


}

export default CoinsCard