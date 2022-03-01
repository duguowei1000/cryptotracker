import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CoinSelection = ({ coin }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/CoinsHome/${coin.id}`);
  }

  return (

    <div className="tickerBox" > 
        <button onClick={handleClick}>
        <div >{coin.id}</div>
        <div >${coin.current_price}</div>
        <img 
        height="50px" 
        src={coin.image}
        />
        </button>
    </div>


      
  );
};

export default CoinSelection;
