
const HomeWatchlist = (props) => {

    const tickerRows = props.cart.map((x) => (
    <li
        onClick={() => props.removeTickerClick(x)}
        >
        {x.coin.name}
    </li>)  
    )

    return(
        <>
        {tickerRows}
        </>
    )

}

export default HomeWatchlist