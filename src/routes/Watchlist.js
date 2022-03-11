import { useEffect, useState } from "react";
import WatchlistTicker from "../components/WatchlistTicker";
import { Link } from "react-router-dom";

console.log(window.localStorage.getItem("watchlistCart"))
export default function Watchlist() {
    const [coinDetails, setCoinDetails] = useState([]); // {} for empty object //else will be error
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
            // console.log(parsedCart)  //object
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
        if (coinDetails.length) {
            const watchlist = getWatchlist()
            // console.log(">>>CoinDetails", coinDetails)
            // console.log(">>>watchlist", watchlist)
            const matchingCoins = coinDetails.filter(coinDetail => {
                return Object.values(watchlist).includes(coinDetail.id)
            })
            setCoins(matchingCoins)  //find coins that match the local.storage against API call
            // console.log('>>>matchingCoins', matchingCoins)
        }
    }, [coinDetails])

    const removeCoinID = (storedItem) => {
        const { name } = storedItem
        const watchlist = getWatchlist()
        delete watchlist[name]

        window.localStorage.setItem("watchlistCart", JSON.stringify(watchlist))
        setCoinDetails([...coinDetails]) //trigger the useeffect for filtering
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
            <table className="watchlistbox">
                <WatchlistTicker
                    id={x.id}
                    name={x.name}
                    price={x.current_price}
                    percentchange={x.price_change_percentage_24h}
                    img={x.image}
                    market={x.market_cap}
                    removeTickerClick={removeCoinID}
                />

            </table>
            <hr width="850px" />

        </div>))


    return (

        <>
            <div className="header">
                <div className="watchlistheader">
                    <table className="watchlistTicker" >

                        <td><h1 className="watchlistfirstRow" width="100px">Coin</h1></td>
                        <td><h1 className="watchlistfirstRow" width="100px">Price (USD)</h1></td>
                        <td><h1 className="watchlistfirstRow" width="100px">Market Cap</h1></td>
                        <td><h1 className="watchlistfirstRow">24hr Change</h1></td>
                        <td><h1 className="watchlistfirstRow">Last 30 days</h1></td>

                    </table>
                </div>
            </div>

            {tickers}
            <button onClick={clearList} className="buttonCSS_1">Clear watchlist</button>
            <p>&nbsp;</p>
            <Link className="nav-link" to="/" style={{ textDecoration: 'none' }} className="buttonCSS_2">Back to Home</Link>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </>

    )


}
        // const [coinsObj, setcoinsObj] = useState([])
        // const [newCoinsArray, setnewCoinsArray] = useState([])
        // for (let j = 0; j < coins.length ; j++) {
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
        //     window.localStorage.setItem('watchlistCart', JSON.stringify(coinsObj));
        //     let stored =window.localStorage.getItem("watchlistCart")
        // }
        // handleToggle();