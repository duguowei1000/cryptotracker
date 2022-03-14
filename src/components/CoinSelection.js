
const CoinSelection = (props) => {
    const coin = props.coin
    const coinName = props.coin.name


    return (
        <div className="topcoinBox">
            <div className="tickerBox" >

                <button className="tickerButton"
                    onClick={() => props.handleCoinClick(props)}>
                    <div className="tickerID bold">{coinName}</div>
                    <div className="tickerPrice" >${coin.current_price}</div>
                    <img
                        height="50px"
                        src={coin.image}
                        alt=""
                    />
                </button>
            </div>
            <button className="button_add"
                onClick={() => props.handleAddCoin(props)} style={{ fontSize: 25 }}
            >+
            </button>
        </div>


    );
};

export default CoinSelection;
