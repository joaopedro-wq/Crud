import React, {useState, useEffect} from "react";
import Items from "../components/arquive";
import Axios from "axios";

function listagem(){
    const [ListItems, setListItems] = useState();


    useEffect (() => {
        Axios.get("http://localhost:3001/getItems").then((response) => {
        setListItems(response.data);
        });
    }, []);
    
    return (
        <div>


<h1 className="registerTitle"> Mercadinho</h1>
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


};

export default listagem;