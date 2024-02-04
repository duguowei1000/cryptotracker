import './App.css';
import { Outlet, Link } from "react-router-dom";
import image from './llama_cropped.png'


function App() {


  return (
    <div className="App" >
      <div className='topPart'>
        <img src={image} alt="" height="100px" className='inline_block' style={{ marginTop: 10 } }></img>
         <div><h1 className='inline_block pixel_font' style={{ fontSize: 70 }}>Llama.Tracker</h1>
        <div className='notice'> Please note the site is rate limited to 30 API calls (all API info is credited to CoinGecko)</div></div>
      </div>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >

        <div className='margin_button'><Link to="/" className="buttonCSS " style={{ textDecoration: 'none' }} > Home </Link> {" "}
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
