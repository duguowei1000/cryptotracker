// import initialCard from "../data/cards"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const startURL = 'https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=false'

function CoinsCard() {
    const [card,setCard] = useState({}); // {} for empty object //else will be error
    // const [card,setCard] = useState({name: guowei}); // to prevent initial error
    // const [card,setCard] = useState(initialCard);
    const [loading, setLoading] = useState(true)
    // const[count, setCount] = useState(0)
    const [url, setUrl] = useState(startURL)
    const [status, setStatus] = useState()
    const {id} = useParams();
    console.log(id)

    // setUrl(`https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=false`)
    console.log(url)
    useEffect(()=> {
        setStatus("loading")
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=false`)
        // fetch("https://api.magicthegathering.io/v1/cards/386615")
    .then((response) => response.json())
    .then((d) => { 
        console.log("useEffect",d)
        setCard(d)
        setLoading (false)
        setStatus("success")
    })
    .catch((error) => {
        setStatus("error")
        console.error(error)
    })
    },[card]);

    if(status === "loading"){
        return <div>Loading...</div>
    }
    if(status === "error"){
        return <div>Not Loading...</div>
    }

    return (
        <>
        {/* {params.id} */}
        <div>{card.description.en}</div>
        {/* { loading === true ? <h1>loading</h1> : <div>${card.description.en}</div> } */}
        {/* { loading === true ? <h1>loading</h1> : <img src={card.imageUrl} alt="this is the image" /> } */}
        
        {/* <p>count: {count}</p>
        <button onClick={() => setCount(count +1 )}>fetch</button> */}
        <nav>

        </nav>
        </>
    )
}

export default CoinsCard