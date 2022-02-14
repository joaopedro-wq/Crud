import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {render} from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Listagem from './pages/Listagem';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    
        
    <Route path="/" element= {<App />}/>
    <Route path="listagem" element= {<Listagem />}/>
    <Route path="Main" element= {<Main />}/>
    <Route path="Cadastro" element= {<Cadastro />}/>


    </Routes>
  
  </BrowserRouter>,
  rootElement
);