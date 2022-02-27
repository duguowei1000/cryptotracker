import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Currency(){
    const { currency } = useParams();
    const [price, setPrice] = useState();
    // const [pricechange, setPriceChange] = useState();

    useEffect(() => {
        // fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
          .then((r) => r.json())
          .then((d) => {
            console.log(d[2].id)
            // setPrice(d.bitcoin.usd);
            // setPriceChange(d.bitcoin.usd_24h_change);
          });

          
      })
    //   , [currency]);

    useEffect(() => {
        // fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
        fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`)
          .then((r) => r.json())
          .then((d) => {
            console.log(d.prices)
            console.log(d.prices[0])
            // setPrice(d.bitcoin.usd);
            // setPriceChange(d.bitcoin.usd_24h_change);
          });

          
      })
    //   , [currency]);

    return (
        <div>
    {/* //     <h1>Bitcoin price in {currency}</h1>
    //     <h1>Price: {price}</h1>
    //     <h1>Price change over 24hr:  {Math.floor(pricechange *100)}%</h1>
    //     <Link to="/currencies">Back to Currencies</Link>
    //     <p>
    //       <button>
    //         <Link to="/" />
    //         Home
    //       </button>
    //     </p> */}
      </div>

    )

}

// {id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', current_price: 37909, …}
// ath: 69045
// ath_change_percentage: -45.17111
// ath_date: "2021-11-10T14:24:11.849Z"
// atl: 67.81
// atl_change_percentage: 55728.1041
// atl_date: "2013-07-06T00:00:00.000Z"
// circulating_supply: 18965443
// current_price: 37909
// fully_diluted_valuation: 794986061250
// high_24h: 39118
// id: "bitcoin"
// image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated: "2022-02-22T16:03:50.600Z"
// low_24h: 36546
// market_cap: 717964896687
// market_cap_change_24h: -19846240925.841797
// market_cap_change_percentage_24h: -2.68988
// market_cap_rank: 1
// max_supply: 21000000
// name: "Bitcoin"
// price_change_24h: -1124.355850929191
// price_change_percentage_24h: -2.88052
// roi: null
// symbol: "btc"
// total_supply: 21000000
// total_volume: 25720985995