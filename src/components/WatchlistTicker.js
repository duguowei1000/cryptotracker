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
        <tr>
        <div className="watchlistTicker">
        <td><img src={props.img} height="50px"></img></td>
        <td><div>{props.name}</div></td>
        <td><div>{props.percentchange}%</div></td>
        <td><WatchListChart id={props.id} name={props.name}/></td>
        </div>
        </tr>
    
    )
}

export default WatchlistTicker