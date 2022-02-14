import React, {useState, useEffect} from "react";
import Items from "../components/arquive";
import Axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import  Dialog  from "../components/dialog";
import axios from "axios";


function Listagem(props){
    
    const [ListItems, setListItems] = useState();
    
    useEffect (() => {
        Axios.get("http://localhost:3001/getItems").then((response) => {
        setListItems(response.data);
        });
    }, []);
    const [editValues, setEditValues] = useState({
        id: props.id,
        nome: props.nome,
        cost: props.cost,
        category: props.category,
    });
    
    const handleEditItem = () =>{
        Axios.put("http://localhost:3001/editItem",{
        id: editValues.id,
        nome: editValues.nome,
        cost: editValues.cost,
        category: editValues.category,
    });
};




    
    function deletePost (id) {
            Axios.delete(`http://localhost:3001/editItem/
            ${id}`)

    };
    
    
    
    return (
        <div>
            
        <h1 className="registerTitle"> Mercadinho</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
        <TableRow>
            <TableCell>ID </TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Categoria</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>       
        {typeof ListItems !== "undefined" && ListItems.map((value) => (
            <TableRow
            key={value.idTabela}
            ListItem = {ListItems}
            
            
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {value.idTabela}
            </TableCell>
            <TableCell align="center">{value.nome}</TableCell>
            <TableCell align="center">{value.cost}</TableCell>
            <TableCell align="center">{value.category}</TableCell>
            <TableCell align="right">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button  >Editar</Button>
                <Button onClick={() => deletePost(value.idTabela)} color="error" variant="outlined"  >Excluir</Button>
        </ButtonGroup>
    </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>  
    </div>


        );
    
    };


export default Listagem;