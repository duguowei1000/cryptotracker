import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CoinsCard from "./CoinsCard";
import CoinSelection from "../components/CoinSelection";

import Chart from 'react-apexcharts'
import { useNavigate } from "react-router-dom";
import Home_Watchlist from "./Home_Watchlist";

export default function CoinsHome() {

    const [list, setList] = useState([]);
    const [CoinSelected, setCoinSelected] = useState({})
    const [watchlistCart, setWatchlistCart] = useState({})
    const [watchlistDetails, setWatchlistDetails] = useState([])
    const [toggle, setToggle] = useState(false);
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


    const handleCoinClick = (x) => {
        console.log(x)
        setCoinSelected(x.coin.name)
        console.log(CoinSelected)
        navigate(`/CoinsHome/${x.coin.id}`);

    }

    const handleAddCoin = (item) => {
        handleToggle() //add list to local storage
        setWatchlistCart(
            {
            ...watchlistCart,[item.coin.name]: item.coin.id
        }
        )
        setWatchlistDetails(
            [
            ...watchlistDetails, item
        ]
        )
        let newStorage = myStorage.getItem('watchlistCart')
        console.log(JSON.parse(newStorage))
    }

    const handleRemoveCoin = (item) => {

        const clonedlistcart = {...watchlistCart}
        delete clonedlistcart[item]
        console.log(item)

        setWatchlistCart(clonedlistcart)
        handleToggle() //add list to local storage
            
    }
    console.log(watchlistCart)

    const handleToggle = () => {
        setToggle(!toggle);
      };

    const addToListStorage = () => {
        // console.log(watchlistCart) //object
        myStorage.setItem('watchlistCart',JSON.stringify(watchlistCart));
        console.log(myStorage) //string

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
            <div>
                <button onClick={addToListStorage}>Add to WatchList</button>
            </div>
            <Home_Watchlist cart={watchlistCart} removeTickerClick={handleRemoveCoin}/>
        </div>

    )
}
