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
    
        
        <div className="watchlistTicker">
            
        <img className="inline_block" src={props.img} height="50px"></img> 
        <div className="inline_block" className="name_size"><b>{props.name}</b></div>
        <div className="inline_block">${props.price.toFixed(3)}</div>
        <div className="inline_block" style={{color: tickerColor()}}>{props.percentchange.toFixed(2)}%</div>
        <div className="inline_block">
            <WatchListChart 
            id={props.id} 
            name={props.name} 
            percentchange={props.percentchange}
            colorChange={colorChange()}
            /></div>
         
        </div>
       
    )
}

export default WatchlistTicker