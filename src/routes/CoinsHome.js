import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CoinsCard from "./CoinsCard";
import CoinSelection from "../components/CoinSelection";

import Chart from 'react-apexcharts'
import { useNavigate } from "react-router-dom";
import HomeWatchlist from "../components/HomeWatchlist";



console.log(Date.now())
const chart_ =
{
    options: {
        stroke: {
            curve: 'smooth',
            width: 3
        },
        series: [{
            type: 'area',
            name: 'ewrwe',

            data: [
                [
                    1643760000000,
                    38835.69494322237
                ],
                [
                    1643846400000,
                    37000.98249864199
                ],
                [
                    1643932800000,
                    37101.351593780935
                ],
                [
                    1644019200000,
                    41673.8395543094
                ],
                [
                    1644105600000,
                    41493.690050910525
                ],
                [
                    1644192000000,
                    42475.543220951215
                ],
                [
                    1644278400000,
                    43910.929986443094
                ],
                [
                    1644364800000,
                    44184.447511676175
                ],
                [
                    1644451200000,
                    44383.88805541707
                ],
                [
                    1644537600000,
                    43628.13953235228
                ],
                [
                    1644624000000,
                    42445.38876793804
                ],
                [
                    1644710400000,
                    42254.738123237206
                ],
                [
                    1644796800000,
                    42247.83595326771
                ],
                [
                    1644883200000,
                    42634.573783663065
                ],
                [
                    1644969600000,
                    44574.32057099816
                ],
                [
                    1645056000000,
                    44063.28198279571
                ],
                [
                    1645142400000,
                    40562.98694982819
                ],
                [
                    1645228800000,
                    40073.495362369824
                ],
                [
                    1645315200000,
                    40192.75912143141
                ],
                [
                    1645401600000,
                    38514.00853622455
                ],
                [
                    1645488000000,
                    37059.979402287514
                ],
                [
                    1645574400000,
                    38337.2038554348
                ],
                [
                    1645660800000,
                    37372.2926803477
                ],
                [
                    1645747200000,
                    38363.345488570165
                ],
                [
                    1645833600000,
                    39316.16207578596
                ],
                [
                    1645920000000,
                    39090.202153609054
                ],
                [
                    1646006400000,
                    37803.59016044929
                ],
                [
                    1646092800000,
                    43225.404677435734
                ],
                [
                    1646179200000,
                    44459.59162774341
                ],
                [
                    1646265600000,
                    43980.707382090906
                ],
                [
                    1646282410000,
                    43455.60212738579
                ]
            ] //dates
        }],
        chart: {
            type: 'area',
            id: 'area-datetime',
            stacked: false,
            height: 350,

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
            style: 'hollow'
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

export default function CoinsHome() {

    const [list, setList] = useState([]);
    const [CoinSelected, setCoinSelected] = useState({})
    const [watchlistCart, setWatchlistCart] = useState({})
    const navigate = useNavigate();


    useEffect(() => {
        // fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`)
            .then((r) => r.json())
            .then((d) => {
                setList(d);
            })
            .catch(error => { console.log(error.message) })

    }
        , [])
    //   , [currency]);
    console.log(chart_.options.series)

    const handleCoinClick = (x) => {
        console.log(x)
        setCoinSelected(x.coin.name)
        console.log(CoinSelected)
        navigate(`/CoinsHome/${x.coin.id}`);

    }

    const handleAddCoin = (item) => {


        setWatchlistCart({
            ...watchlistCart,
            [item.coin.id]: item
        })

        // console.log("length>>"+watchlistCart.length)
        // console.log(item.coin.id)
        // watchlistCart.forEach(element => console.log(element.coin.id) )
        // watchlistCart.forEach(element => console.log(element.coin.id === item.coin.id))
        // watchlistCart.forEach(element => console.log("not=" + (element.coin.id !== item.coin.id)))
        // if ((watchlistCart.length === 0)){
        //     setWatchlistCart([...watchlistCart, item])
        // }else if (watchlistCart.forEach(element => (element.coin.id !== item.coin.id))){
        //     setWatchlistCart([...watchlistCart, item])
        //  }


        console.log(watchlistCart)

        // setWatchlistcart([...Watchlistcart, item])


    }

    const handleRemoveCoin = (item) => {
        // const newlist = watchlistCart.filter((i) => i !==item)
        // setWatchlistCart(newlist)
        console.log(item)
        const clonedlistcart = {...watchlistCart}
        delete clonedlistcart[item]
        console.log(clonedlistcart)

        setWatchlistCart(
            clonedlistcart
        )
    }
    console.log(watchlistCart)

    const Tickers = list.map((coin, index) => {
        return (
            <CoinSelection
                key={index}
                coin={coin}
                handleCoinClick={handleCoinClick}
                handleAddCoin={handleAddCoin} />
        )
    })
    return (
        <div>
            <h1>Top 30 Coins</h1>
            {Tickers}
            {/* {list.map((coin,index) => {return <CoinSelection key={index} coin={coin} handleCoinClick={handleCoinClick}/>
            })} */}
            <div>
                <button>Add to WatchList</button>
            </div>
            <div>
                <HomeWatchlist cart={watchlistCart} removeTickerClick={handleRemoveCoin} />
            </div>

            <div>
            </div>
            <Chart options={chart_.options} series={chart_.options.series} width="40%" height={260} />
        </div>

    )
}

//https://create-react-app.dev/docs/deployment/