import React, {useState} from 'react';
import './App.css';
import  Axios  from "axios";
import { Outlet, Link } from "react-router-dom";


function App() {
const [values, setValues] = useState();


const handleChangeValues = (value) =>{
  setValues((prevValue) => ({
    ...prevValue,
    [value.target.name]: value.target.value,
  }));
};

const handleClickButton = () =>{
  Axios.post("http://localhost:3001/register", {
    nome: values.nome,
    cost: values.cost,
    category: values.category,
  }).then((response) =>{
    console.log(response);
  });
};
  return (
    <div>
    
      <h1 className="registerTitle"> Mercadinho</h1>
      <div className="AppContainer">
      <div className='registerContainer'> 
      <div> 
        <h2>     
        HOME PAGE
          </h2> </div>
      </div>
      
        <Link className='ButtonLista' to="/listagem">listagem</Link> 
        <Link  className='ButtonCadastro' to="/cadastro">cadastro</Link>
      
        
    </div>
    
    </div> 
    
  );
}

export default App;
