




function WatchlistTicker(props){
    console.log(window.localStorage.getItem("watchlistCart"))

    return(
        <>
        <div>{props.name}</div>
        <div>{props.percentchange}%</div>
        </>
    
    )
}

export default WatchlistTicker