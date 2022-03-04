import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CoinSelection = (props) => {
  const coin = props.coin
  const coinName = props.coin.name
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/CoinsHome/${coin.id}`);
//   }

  return (
    <div className="topcoinBox">
    <div className="tickerBox" > 
        
        <button 
            onClick={() => props.handleCoinClick(props)}>
            <div className="tickerID" >{coinName}</div>
            <div className="tickerPrice" >${coin.current_price}</div>
            <img 
            height="50px" 
            src={coin.image}
            />
        </button>
    </div>
        <button
        >Add
        </button>
    </div>

      
  );
};

export default CoinSelection;
