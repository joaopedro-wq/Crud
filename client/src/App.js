import react, {useState, useEffect} from 'react';
import './App.css';
import  Axios  from "axios";
import Items from './components/arquive';

function App() {
const [values, setValues] = useState();
const [ListItems, setListItems] = useState();

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

  useEffect (() => {
    Axios.get("http://localhost:3001/getItems").then((response) => {
      setListItems(response.data);
    });
  }, []);



  return (
    <div className="AppContainer">
      <div className='registerContainer'> 
      <h1 className="registerTitle"> Mercadinho</h1>
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
      <button className="registerButton" onClick={() => handleClickButton()}
      >Cadastrar</button>
      </div>
      {typeof ListItems !== "undefined" && ListItems.map((value) => {
        return ( 
        <Items key= {value.id}
        ListItem = {ListItems}
        setListItem = {setListItems}
        id = {value.id}
        nome = {value.nome}
        cost = {value.cost}
        category = {value.category}
        ></Items>
        ); 
        })}
      
    </div>
  );
}

export default App;
