
//   // import initialCard from "../data/cards"
// import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// function CoinsChart(props) {
//     const [card,setCard] = useState({}); // {} for empty object //else will be error
//     // const [card,setCard] = useState({name: guowei}); // to prevent initial error
//     // const [card,setCard] = useState(initialCard);
//     const [loading, setLoading] = useState(true)
//     const [status, setStatus] = useState()
//     // const {id} = useParams();
//     // console.log(id)

//     useEffect(()=> {
//         setStatus("loading")
//         fetch(`https://api.coingecko.com/api/v3/coins/${props}/market_chart?vs_currency=usd&days=30&interval=daily`) 
//     .then((response) => response.json())
//     .then((d) => { 
//         console.log("useEffect",d)
//         setCard(d.description)  //*down to one level above the required value
//         setLoading (false)
//         setStatus("success")
//     })
//     .catch((error) => {
//         setStatus("error")
//         console.error(error)
//     })
//     },[]);

//     if(status === "loading"){
//         return <div>Loading...</div>
//     }
//     if(status === "error"){
//         return <div>Not Loading...</div>
//     }

//     return (
//         <>
//         <div>{card.en}</div> 
//         {/* { loading === true ? <h1>loading</h1> : <div>${card.description.en}</div> } */}
//         {/* { loading === true ? <h1>loading</h1> : <img src={card.imageUrl} alt="this is the image" /> } */}
        
//         <nav>

//         </nav>
//         </>
//     )
// }

// export default CoinsChart