import react, {useState} from 'react';
import './App.css';

function App() {
const [values, setValues] = useState();

const handleChangeValues = (value) =>{
  setValues((prevValue) => ({
    ...prevValue,
    [value.target.name]: value.target.value,

  }));

};

const handleClickButton = () =>{

  console.log(values)
};

  return (
    <div className="AppContainer">
      <div className='registerContainer'> 
      <h1 className="registerTitle"> Loja sei la</h1>
      <input
      type="text"
      name="name"
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
      <button className="registerButton" onClick={() => handleClickButton()}
      >Cadastrar</button>
      </div>
      
    </div>
  );
}

export default App;
