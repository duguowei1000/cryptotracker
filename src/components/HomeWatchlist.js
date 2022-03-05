
import { useEffect, useState } from "react";
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

    const tickerRows = Object.keys(props.cart).map((x,index) => (
        
            <li className="ULlist"
                key={index}
                onClick={() => props.removeTickerClick(x)}
            >
                {x}
            </li>)
    
    )

    return (
        <>
        <ol>
            {tickerRows}
        </ol>
        </>
    )

}

export default HomeWatchlist