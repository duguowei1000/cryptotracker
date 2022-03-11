import './App.css';
import { Outlet,Link } from "react-router-dom";


function App() {
  return (
    <div className="App" >
    <h1>Crypto Tracker</h1>

    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        
        <div className='margin_button'><Link to="/" className="buttonCSS" style={{ textDecoration: 'none' }} > Home </Link> {" "}
        {/* | {" "} */}
        {/* <Link to="CoinsHome">Coinlist</Link> | {" "} */}
        <Link to="watchlist" className="buttonCSS" style={{ textDecoration: 'none' }}>Watchlist</Link> 
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
