import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {render} from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Listagem from './pages/Listagem';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element= {<App />}/>
    <Route path="listagem" element= {<Listagem />}/>

    </Routes>
  
  </BrowserRouter>,
  rootElement
);