import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CoinsCard from "./CoinsCard";
import CoinSelection from "../components/CoinSelection";

import Chart from 'react-apexcharts'
import { useNavigate } from "react-router-dom";
import HomeWatchlist from "../components/HomeWatchlist";



console.log(Date.now())


export default function CoinsHome() {

    const [list, setList] = useState([]);
    const [CoinSelected, setCoinSelected] = useState({})
    const [watchlistCart, setWatchlistCart] = useState({})
    const [watchlistDetails, setWatchlistDetails] = useState({})
    const navigate = useNavigate();
    const myStorage = window.localStorage;


    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`)
            .then((r) => r.json())
            .then((d) => {
                setList(d);
            })
            .catch(error => { console.log(error.message) })

    }
        , [])
    //   , [currency]);

    const handleCoinClick = (x) => {
        console.log(x)
        setCoinSelected(x.coin.name)
        console.log(CoinSelected)
        navigate(`/CoinsHome/${x.coin.id}`);

    }

    const handleAddCoin = (item) => {
        setWatchlistCart(
            {
            ...watchlistCart,[item.coin.name]: item.coin.id
        }
        )
        setWatchlistDetails(
            {
            ...watchlistDetails,[item.coin.name]: item.coin
        }
        )

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
        let newStorage = myStorage.getItem('watchlistCart')
        console.log(JSON.parse(newStorage))
    }

    const handleRemoveCoin = (item) => {
        const clonedlistcart = {...watchlistCart}
        delete clonedlistcart[item]

        setWatchlistCart(clonedlistcart)
            
    }
    console.log(watchlistCart)
    const addToListStorage = () => {
        myStorage.setItem('watchlistCart',JSON.stringify(watchlistCart));
        console.log(myStorage)

    }

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
                <button onClick={addToListStorage}>Add to WatchList</button>
            </div>
            <div>
                <HomeWatchlist cart={watchlistCart} removeTickerClick={handleRemoveCoin} details={watchlistDetails}/>
            </div>

            <div>
            </div>
            {/* <Chart options={chart_.options} series={chart_.options.series} width="40%" height={260} /> */}
        </div>

    )
}

//https://create-react-app.dev/docs/deployment/