import WatchListChart from "./WatchlistChart"


function WatchlistTicker(props){
    <table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
    
    return(
    
        <div className="watchlistTicker">
        <img className="inline_block" src={props.img} height="50px"></img>
        <div className="inline_block">{props.name}</div>
        <div className="inline_block">{props.percentchange}%</div>
        <div className="inline_block"><WatchListChart id={props.id} name={props.name}/></div>
        </div>
        
    
    )
}

export default WatchlistTicker