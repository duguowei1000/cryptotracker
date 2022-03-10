import WatchListChart from "./WatchlistChart"


function WatchlistTicker(props){

        function colorChange (){
            if(props.percentchange < 0){
            return '#f77d6d'    //red
        }else return '#1db512' //green
        }

        function tickerColor (){
            if(props.percentchange < 0){
            return 'red'    //red
        }else return 'green' //green
        }
    
    return(
    
        
        <table className="watchlistTicker" >
        
        <td className="inline_block" width="100px" >
        <img className="inline_block" src={props.img} height="50px" ></img> 
        <div className="inline_block" className="name_size"><b>{props.name}</b></div>
        </td>
        <td className="inline_block" width="100px">${props.price.toFixed(3)}</td>
        <td className="inline_block" width="140px">  ${props.market.toLocaleString()}</td>
        <td className="inline_block" width="100px"style={{color: tickerColor()}}>{props.percentchange.toFixed(2)}%</td>
        <td className="inline_block" >
            <WatchListChart 
            id={props.id} 
            name={props.name} 
            percentchange={props.percentchange}
            colorChange={colorChange()}
            /></td>
        <button className="inline_block" onClick={()=> props.removeTickerClick(props)}> delete </button>
        
       
        </table>
       
    )
}

export default WatchlistTicker