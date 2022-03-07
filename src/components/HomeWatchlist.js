
import { useEffect, useState } from "react";
import WatchListChart from "./WatchlistChart";
const HomeWatchlist = (props) => {
// const [Series, setSeries] = useState(null)
//     console.log(props.coin.id)

//     useEffect(() => {
    
//     const fetchChartData = () => {
//         fetch(`https://api.coingecko.com/api/v3/coins/${props.coin.id}}/market_chart?vs_currency=usd&days=30&interval=daily`) 
//         .then((response) => response.json())
//         .then((dailyprices) => { 
//             setSeries(dailyprices)  //*down to one level above the required value
            
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     }
//     fetchChartData();
// }, []);

// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// Array.from(props.cart);
    console.log(props.details)
    const watchlistArrayName = Object.keys(props.cart)
    const watchlistArrayID = Object.values(props.details)

    const tickerRowsID = watchlistArrayID.map((x) => (
        x.id
))
    const tickerRowsName = watchlistArrayName.map((x,index) => 

            <li className="ULlist"
                key={index}
                onClick={() => props.removeTickerClick(x)}
            >
                <div>{x}</div> <div>{tickerRowsID}</div>
            </li>
            )


    return (
        <>
        <ol>
            {tickerRowsName}
            
            
        </ol>
        </>
    )

}

export default HomeWatchlist