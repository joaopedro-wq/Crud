import React, {useState, useEffect} from 'react';

import  Axios  from "axios";
import {useParams} from 'react-router-dom';



function Main(props) {
const {idTabela} = useParams();
const [editValues, setEditValues] = useState({
  idTabela: props.idTabela,
    nome: props.nome,
    cost: props.cost,
    category: props.category,
  });

  useEffect (() => {
    async function getProdutos (){
      var response = await Axios.get('http://localhost:3001/getItems/:idTabela'+idTabela)
      console.log(response)
      setEditValues(response.data.nome);
      setEditValues(response.data.cost);
      setEditValues(response.data.category);
    }
    getProdutos();
  },[]);


  
  const handleChangeValues = (values) =>{
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.name]: values.target.value,
    }));
  };

const handleEditItem = async () =>{
  await Axios.put("http://localhost:3001/editItem",{
    id: editValues.idTabela,
    nome: editValues.nome,
    cost: editValues.cost,
    category: editValues.category,
})
console.log(editValues)
};






  return (
    <div>
      <h1 className="registerTitle"> Mercadinho</h1>
      <div className="AppContainer">
      <div className='registerContainer'> 
      </div>
      
      <input
      type="text"
      name="nome"
      placeholder="nome"
      className="registerInput"
      
      onChange={handleChangeValues}
      />
      <input
      type="text"
      name="cost"
      placeholder="preco"
      className="registerInput"
      
      onChange={handleChangeValues}
      />
      <input
      type="text"
      name="category"
      placeholder="categoria"
      className="registerInput"
      
      onChange={handleChangeValues}
      />
      <button className="registerButton" onClick={ () => handleEditItem()
      
      }
      >Atualizar</button>
    </div> 
    
    
    
    </div>

    );
    
};

export default Main;
