import React, {useState} from 'react';

import  Axios  from "axios";



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
      <button className="registerButton" onClick={ () => handleClickButton()
      }
      >Cadastrar</button>
    </div> 
    </div>
    
    
  );
}

export default App;
