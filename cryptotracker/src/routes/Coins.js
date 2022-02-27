import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Coins(){

    const [list, setList] = useState([]);

    useEffect(() => {
        // fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
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
            <h1>Coins</h1>
            {/* <h1>{list}</h1> */}
            {/* <h1>{list[0]["id"]}</h1> */}


            {list.map((coin,index) => {
                     return <div key={index}>{coin.id}</div>})}
            

            <div>
                {/* <Link to={`/Coins/${list[5]["id"]}`}></Link> */}
                {/* <Link to={`/Coins/${list[0].id}`}></Link> */}
            </div>
        </div>

    )
}