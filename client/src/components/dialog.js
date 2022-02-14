import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import "./dialog.css";
import { Axios } from 'axios';


export default function FormDialog(props) {
  


  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };
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

handleClose();
};

const handleChangeValues = value => {
    setEditValues(prevValues =>({
  
    ...prevValues,
    [value.target.id]: value.target.value,

    }));
  };




  return (
    <div >
      
      <Dialog className = "teste" open={props.open} onClose={handleClose}>
        <DialogTitle className="editButton">Editar</DialogTitle>
        <DialogContent>
          
          <TextField 
            autoFocus
            margin="dense"
            id="nome"
            defaultValue={props.nome}
            onChange={handleChangeValues}
            
            label="Nome produto"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            defaultValue={props.cost}
            onChange={handleChangeValues}
            
            label="Preço"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            defaultValue={props.category}
            onChange={handleChangeValues}
            label="Categoria"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}> Cancelar </Button>
          <Button onClick={handleClose}> Salvar </Button>
          <Button onClick={handleClose}> Excluir </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}