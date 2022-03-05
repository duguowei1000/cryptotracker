// import initialCard from "../data/cards"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from 'react-apexcharts'
import chart_ from "../chart_config";


function CoinsCard() {
    const {id} = useParams();
    ///Charts//
    const [CoinDetails,setCoinDetails] = useState({}); // {} for empty object //else will be error
    const [CoinDetailsStatus,setCoinDetailsStatus] = useState(null)
    const [ChartDataStatus, setChartDataStatus] = useState(null)
    const [ChartDataLoaded,setChartDataLoaded] = useState(null)
    const [CoinName, setCoinName] = useState(null)
    const [series,setSeries]= useState([{
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
        setLoading (false)
    }
    }, [CoinDetailsStatus, ChartDataStatus])

    if(status === "loading"){
        return <div>Loading...</div>
    }
    if(status === "error"){
        return <div>Not Loading...</div>
    }
    console.log("series =>>",series)

    console.log(series.prices)
    const inputSeries = [{
        type : 'area',
        name : id,
        data: series.prices
    }]

    // if(ChartDataLoaded){ //isChartDataLoaded &&{}
    return (
        
        <>
        <h1>{CoinName}</h1>
        {ChartDataLoaded && 
        <Chart options={chart_.options} series={inputSeries} width="100%" height={450} />
    }
        <div>{CoinDetails.en}</div> 
        {/* {loading === true ? <h1>hihasfasfasfasi</h1> : <div>{CoinDetails.en}</div>  }  */}
        <nav>

        </nav>
        </>

    )
    

}

export default CoinsCard