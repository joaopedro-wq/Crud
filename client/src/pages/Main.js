import React, {useState} from 'react';

import  Axios  from "axios";




function Main(props) {

  
const [editValues, setEditValues] = useState({
  idTabela: props.idTabela,
    nome: props.nome,
    cost: props.cost,
    category: props.category,
  });
  const handleChangeValues = (values) =>{
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

const handleEditItem = () =>{
    Axios.put("http://localhost:3001/editItem",{
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
