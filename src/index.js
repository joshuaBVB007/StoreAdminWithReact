import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//importamos la clase jonathan para crear instancias de esa clase
import { RoutingApp } from "./Routing/routes.js";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header/Header.js";


function App(){
  return (
    <div>
      <div className="App">
        <Header/>
        <RoutingApp/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);









