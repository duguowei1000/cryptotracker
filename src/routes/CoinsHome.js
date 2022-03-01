import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CoinsCard from "./CoinsCard";
import CoinSelection from "../components/CoinSelection";

export default function CoinsHome(){

    const [list, setList] = useState([]);

    useEffect(() => {
        // fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`)
          .then((r) => r.json())
          .then((d) => {
            // console.log(d[0].id)
            setList(d);
            // setList(d[3].id)
            // console.log(d) //doesnt load straight away as need loop through function first
            
          })
          .catch(error =>{console.log(error.message)} )
          
      }
       ,[])
    //   , [currency]);

    return(
        <div>
            <h1>Top 30 Coins</h1>
            
            {list.map((coin,index) => {return <CoinSelection key={index} coin={coin}/>
            })}
            <div>
            <button>Add to WatchList</button>
            </div>
            
        
                
            <div>
                {/* <Link to={`/Coins/${list[5]["id"]}`}></Link> */}
                {/* <Link to={`/Coins/${list[0].id}`}></Link> */}
            </div>
        </div>

    )
}

//https://create-react-app.dev/docs/deployment/