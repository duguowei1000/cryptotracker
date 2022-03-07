
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

    const watchlistArrayName = Object.keys(props.cart)
    const watchlistArrayID = Object.values(props.cart)

    const tickerRowsID = watchlistArrayID.map((x) => (
        x
))
    // const tickerRowsName = watchlistArrayID.map((x,index) => 
    
    // {return watchlistArrayName.map((j,index) =>
        
    //         <li className="ULlist"
    //             key={index}
    //             onClick={() => props.removeTickerClick(x)}
    //         >
    //             {j}
    //             <WatchListChart id={x}/>
    //         </li>
    //         )})
    const tickerRowsName = watchlistArrayID.map((x,index) => 

            <li className="ULlist"
                key={index}
                onClick={() => props.removeTickerClick()}
            >
                {x}
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