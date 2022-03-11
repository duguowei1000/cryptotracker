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
        
        <button className="tickerButton"
            onClick={() => props.handleCoinClick(props)}>
            <div className="tickerID" className="bold">{coinName}</div>
            <div className="tickerPrice" >${coin.current_price}</div>
            <img 
            height="50px" 
            src={coin.image}
            />
        </button>
    </div>
        <button className="button_add"
            onClick={() => props.handleAddCoin(props)} style={{fontSize : 25}}
        >+
        </button>
    </div>

      
  );
};

export default CoinSelection;
