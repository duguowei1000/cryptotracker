import { useEffect, useState } from "react";
import WatchlistTicker from "../components/WatchlistTicker";

console.log(window.localStorage.getItem("watchlistCart"))
export default function Watchlist() {
    const [coinDetails, setCoinDetails] = useState([]); // {} for empty object //else will be error
    const [coinsObj, setcoinsObj] = useState([])
    const [newCoinsArray, setnewCoinsArray] = useState([])
    const [toggle, setToggle] = useState(false);
    const [coins, setCoins] = useState([])


    const fetchCoinDetails = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then((response) => response.json())
            .then((d) => {
                setCoinDetails(d)  //*down to one level above the required value
            })
            .catch((error) => {
                console.error(error)
            })

    }
    const getWatchlist = () => {
        const defaultCart = {}
        try {
            let watchlistCart = window.localStorage.getItem("watchlistCart")
            let parsedCart = JSON.parse(watchlistCart) //convert to array of  object
            console.log(parsedCart)  //object
            return parsedCart || defaultCart
        } catch (error) {
            console.error(error)
            return defaultCart

        }
    }
    useEffect(() => {
        fetchCoinDetails()
    }, [])

    useEffect(() => {
        if(coinDetails.length){
            const watchlist = getWatchlist()
            
            const matchingCoins = coinDetails.filter(coinDetail => {
                return Object.values(watchlist).includes(coinDetail.id)
            })
            setCoins(matchingCoins)
        }
    },[coinDetails])
    
    const removeCoinID = (storedItem) => {
        const {name} = storedItem
        const watchlist = getWatchlist()
        delete watchlist[name]
    
        window.localStorage.setItem("watchlistCart", JSON.stringify(watchlist))
        setCoinDetails([...coinDetails]) //trigger the useeffect for filtering
        //     console.log("stored",storedItem)
        // for (let j = 0; j < coins.length ; j++) {
        //     console.log(storedItem.id)
        //     console.log(coins[j].id)
        //     if (coins[j].id === storedItem.id) {
        //         setcoinsObj([])
        //         // coinsObj = [] //this makes sure the array  is empty before pushing
        //         coins.splice(j, 1)
        //         // newCoinsArray = coins
        //         setnewCoinsArray(coins)
        //         console.log(newCoinsArray) //array of objects
        //         newCoinsArray.map(el => {               //for each element to push in to Object
        //             coinsObj.push({ [el.name]: el.id })
        //         })
        //     }
        //     console.log('coinsobj', coinsObj)
        //     window.localStorage.setItem('watchlistCart', JSON.stringify(coinsObj));
        //     let stored =window.localStorage.getItem("watchlistCart")
        //     console.log(stored)
            
        // }
        // handleToggle();
    }


    const clearList = () => {
        window.localStorage.clear()
        window.localStorage.setItem("watchlistCart", JSON.stringify(""))
        setCoinDetails([...coinDetails])
    }
    
    const tickers = coins.map((x, index) => (

        <div
            key={index}
        >
            <div className="watchlistbox" >
                <WatchlistTicker
                    id={x.id}
                    name={x.name}
                    price={x.current_price}
                    percentchange={x.price_change_percentage_24h}
                    img={x.image}
                    removeTickerClick={removeCoinID}
                />

            </div>
            <hr width="850px" />

        </div>))


    return (

        <>
            <div className="watchlistTicker">
                <h1 className="watchlistfirstRow">Coin</h1>
                <h1 className="watchlistfirstRow">Price (USD)</h1>
                <h1 className="watchlistfirstRow">24hr Change</h1>
                <h1 className="watchlistfirstRow">Last 30 days</h1>

            </div>

            {tickers}
            <button onClick={clearList}>clear watchlist</button>
        </>

    )


}
