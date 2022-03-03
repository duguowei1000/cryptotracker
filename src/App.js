import logo from './logo.svg';
import './App.css';
import { Outlet,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApexCharts from 'apexcharts'


var options = {
    chart: {
      type: 'bar'
    },
    series: [
      {
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector('#chart'), options)
  chart.render()

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
