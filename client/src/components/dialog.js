import react, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./dialog.css";


export default function FormDialog(props) {
  

  const handleClickOpen = () => {
    props.setOpen(true);
  };
 
  const handleClose = () => {
    props.setOpen(false);
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
            label="Nome produto"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            defaultValue={props.cost}
            label="Preço"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            defaultValue={props.category}
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