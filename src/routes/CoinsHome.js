import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CoinsCard from "./CoinsCard";
import CoinSelection from "../components/CoinSelection";

import Chart from 'react-apexcharts'
import { useNavigate } from "react-router-dom";
import HomeWatchlist from "../components/HomeWatchlist";
import Watchlist from "../routes/Watchlist"

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

    // useEffect(() => {
    //     addToListStorage()
    // }, [toggle])

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
            ...watchlistDetails,{item}
        ]
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
        handleToggle() //add list to local storage
            
    }
    console.log(watchlistCart)

    const handleToggle = () => {
        setToggle(!toggle);
      };

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
            <div>
                <button onClick={addToListStorage}>Add to WatchList</button>
            </div>
            <div>
                <HomeWatchlist cart={watchlistCart} removeTickerClick={handleRemoveCoin} details={watchlistDetails}/>
            </div>

            <div>
            </div>
            {/* <Watchlist toggle={toggle}
                        cart={watchlistCart} 
                       removeTickerClick={handleRemoveCoin}/> */}
        </div>

    )
}

//https://create-react-app.dev/docs/deployment/