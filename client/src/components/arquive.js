import react from "react";
import "./arquive.css";
import FormDialog from "./dialog";



export default function Items(props){
    const [open, setOpen] = react.useState(false);

    const handleClickItems = () => {
        setOpen(true);

    }; 

    return( 
        <>

        <FormDialog
            open = {open}
            setOpen = {setOpen}
            nome = {props.nome}
            cost = {props.cost}
            category = {props.category}
            ListItems = {props.ListItems}
            setListItems = {props.setListItems}
        />
        <div className="itemContainer" onClick={ () => handleClickItems ()}>
        <h1 className="itemTitle" >{props.nome}</h1>
        <p className="itemCost">{props.cost}</p>
        <p className="itemCategory">{props.category}</p>

    </div>
    </>
    );
}