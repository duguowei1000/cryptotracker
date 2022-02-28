import logo from './logo.svg';
import './App.css';
import { Outlet,Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
        
        <Link to="/"> CoinsHome </Link> | {" "}
        {/* <Link to="CoinsHome">Coinlist</Link> | {" "} */}
        <Link to="watchlist">watchlist</Link> 
 
      </nav>

      <Outlet />

    </div>
  );
}

export default App;
