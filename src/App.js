import './App.css';
import { Outlet,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <h1>Crypto Tracker</h1>

    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        
        <Link to="/"> Home </Link> | {" "}
        {/* <Link to="CoinsHome">Coinlist</Link> | {" "} */}
        <Link to="watchlist">Watchlist</Link> 
 
      </nav>

      <Outlet />

    </div>
  );
}

export default App;
