import { useEffect, useState } from "react";
import HomeWLdelete from "../components/HomeWLdelete";
import WatchlistTicker from "../components/WatchlistTicker";

export default function Home_Watchlist(props) {
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
    }, [])

    const clearList = () => {
        window.localStorage.clear()
    }
    console.log(props.cart)
    const parsedArray = Object.values(props.cart) //coin ids in an array
    console.log(parsedArray)
    const coinIDs = []
    for (let i = 0; i < coinDetails.length; i++) {
        // console.log(coinDetails[i].id)
        for (let j = 0; j < parsedArray.length; j++) {
            if (coinDetails[i].id === parsedArray[j]) {
                coinIDs.push(coinDetails[i]) //array of coins with their information
            }
        }

    }

    const tickers = coinIDs.map((x, index) => (

        <li className="watchlistbox"
            // onClick={() => props.removeTickerClick(x)}
            key={index}>
            <WatchlistTicker
                id={x.id}
                name={x.name}
                price={x.current_price}
                percentchange={x.price_change_percentage_24h}
                img={x.image}
                 //because we added coin by item name
            />
            <HomeWLdelete removeTickerClick={() => props.removeTickerClick(x.name)}/>
            <hr width="850px" />

        </li>))

        return (

            <>
                <div className="watchlistTicker">
                    <h1 className="watchlistfirstRow">Coin</h1>
                    <h1 className="watchlistfirstRow">Price (USD)</h1>
                    <h1 className="watchlistfirstRow">24hr Change</h1>
                    <h1 className="watchlistfirstRow">Last 30 days</h1>

                </div>
                <hr width="850px" />
                {tickers}
                {/* <button onClick={clearList}>clear watchlist</button> */}
            </>

        )


    }