import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CoinsHome from "./routes/CoinsHome";
import Watchlist from "./routes/Watchlist";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CoinsCard from './routes/CoinsCard';

//{process.env.PUBLIC_URL}>
ReactDOM.render(
  
  <BrowserRouter basename="/cryptotracker">
    <Routes>
      <Route path="/" element={<App />}>
        {/* *nested under app */}
        <Route index element ={<CoinsHome />}/>
        <Route path="/CoinsHome/:id" element={<CoinsCard/>}/>
        <Route path="/Watchlist" element={<Watchlist />}></Route>
        {/* <Route path="/Coins" element={<Coins />}></Route> */}
        
      
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//"build": "PUBLIC_URL=/cryptotracker/ react-scripts build && mkdir -p ./build/cryptotracker && mv ./build/static ./build/cryptotracker",