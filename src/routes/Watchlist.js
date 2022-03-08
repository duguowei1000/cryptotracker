import { useEffect, useState } from "react";
import WatchlistTicker from "../components/WatchlistTicker";

console.log(window.localStorage.getItem("watchlistCart"))
export default function Watchlist(props) {
    const getWatchlist = () => {
        const defaultCart = {}
        try{
            const watchlistCart = window.localStorage.getItem("watchlistCart") 
            const parsedCart = JSON.parse(watchlistCart)
            console.log(parsedCart)
            return parsedCart || defaultCart
        }catch(error) {
            console.error(error)
            return defaultCart

        }
    }
    const parsedCart = getWatchlist()
    const [coinDetails, setCoinDetails] = useState({}); // {} for empty object //else will be error

    useEffect(() => {
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
        fetchCoinDetails()
    }, [props.toggle])

    const clearList = () => {
        window.localStorage.clear()

    }

    const parsedArray = Object.values(parsedCart)
    console.log(parsedArray)
    const coinIDs = []
    for (let i = 0; i < coinDetails.length; i++) {
        console.log(coinDetails[i].id)
        for (let j = 0; j < parsedArray.length; j++) {
            if (coinDetails[i].id === parsedArray[j]) {
                console.log(coinDetails[i].id)
                coinIDs.push(coinDetails[i]) //array of coins with their information
                console.log(parsedArray[j])
                console.log(">>>>")
            }
        }
 
    }
    console.log(coinIDs)
    console.log(Object.values(parsedCart))

    const tickers = coinIDs.map((x, index) => (

        <li className="watchlistbox"
            key={index}>
            <WatchlistTicker
                id={x.id}
                name={x.name}
                price={x.current_price}
                percentchange={x.price_change_percentage_24h}
                img={x.image}
            />
        <hr width="850px"/>

        </li>))

    return (

        <>
            <div className="watchlistTicker">
            <h1 className="watchlistfirstRow">Coin</h1>
            <h1 className="watchlistfirstRow">Price (USD)</h1>
            <h1 className="watchlistfirstRow">24hr Change</h1>
            <h1 className="watchlistfirstRow">Last 30 days</h1>
            
            </div>
            <hr width="850px"/> 
            {tickers}
            <button onClick={clearList}>clear watchlist</button>
        </>

    )


}
    // {"staked-ether":{"coin":{"id":"staked-ether","symbol":"steth","name":"Lido Staked Ether","image":"https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546","current_price":2659.84,"market_cap":5556421735,"market_cap_rank":26,"fully_diluted_valuation":5558284782,"total_volume":1336548,"high_24h":2738.53,"low_24h":2587.6,"price_change_24h":-78.687978343773,"price_change_percentage_24h":-2.87337,"market_cap_change_24h":-127001299.74040508,"market_cap_change_percentage_24h":-2.23459,"circulating_supply":2085764.86132847,"total_supply":2086464.21039441,"max_supply":2086464.21039441,"ath":4829.57,"ath_change_percentage":-44.83191,"ath_date":"2021-11-10T14:40:47.256Z","atl":482.9,"atl_change_percentage":451.75044,"atl_date":"2020-12-22T04:08:21.854Z","roi":null,"last_updated":"2022-03-05T12:47:43.363Z"}}}