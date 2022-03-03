// import initialCard from "../data/cards"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinsChart from "../components/CoinsChart";
import Chart from 'react-apexcharts'

const chart_ = 
{
    options: {
    stroke: {
        curve: 'smooth',
        width: 3
        },
    chart: {
    type: 'area',
    id: 'area-datetime',
    stacked: false,
    height: 500,
    
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  fill: {
    type: 'gradient',
    colors: '#ADD8E6',
    gradient: {
      shadeIntensity: 0.2,
      opacityFrom: 0.5,
      opacityTo: 0.9,
      stops: [10, 100]
    }
  },
  
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style:'hollow'
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left'
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(2);
      },
    },
    title: {
      text: 'Price'
    },
    tooltip: {
        enabled: true
      }
  },
  xaxis: {
    type: 'datetime',
    
  },
}
  };

function CoinsCard() {
    const [card,setCard] = useState({}); // {} for empty object //else will be error
    // const [card,setCard] = useState({name: guowei}); // to prevent initial error
    // const [card,setCard] = useState(initialCard);
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState()
    const {id} = useParams();
    console.log(id)

    ///Charts//
    const [series,setSeries]= useState([{
            type: 'area',
            name: 'XYZ MOTORS',
          }])
    console.log(series)

    // series: [{
    //     data:[
    //         [
    //             1643760000000,
    //             38835.69494322237
    //             ],
    //         ]}
    //////////
    useEffect(()=> {
        setStatus("loading")
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=false`) 
    .then((response) => response.json())
    .then((d) => { 
        console.log("useEffect",d)
        setCard(d.description)  //*down to one level above the required value
        setLoading (false)
        setStatus("success")
    })
    .catch((error) => {
        setStatus("error")
        console.error(error)
    })
    },[]);

    ///Chartuseeffect//
    useEffect(()=> {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`) 
    .then((response) => response.json())
    .then((dailyprices) => { 
        console.log("prices",dailyprices)
        setSeries(dailyprices)  //*down to one level above the required value

    })
    .catch((error) => {
        console.error(error)
    })
    },[]);
    ////

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
    
     console.log(inputSeries)
    

    return (
        <>
        <h1>{id}</h1>
        <Chart options={chart_.options} series={inputSeries} width="100%" height={260} />
        <div>{card.en}</div> 
        {/* { loading === true ? <h1>loading</h1> : <div>${card.description.en}</div> } */}
        {/* { loading === true ? <h1>loading</h1> : <img src={card.imageUrl} alt="this is the image" /> } */}
        
        <nav>

        </nav>
        </>
    )
}

export default CoinsCard