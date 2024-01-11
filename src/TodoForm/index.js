import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";

function TodoForm(){
const {
    addTodo,
    setOpenModal,
} = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false); // evita que ña pagina se recargue
    }
    const onCancel = () => {
        setOpenModal(false) 
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>escribe Tu nuevo ToDo</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Aquí tus Tareas"></textarea>
            <div className="TodoForm-buttonContainer">
            <button 
            onClick={onCancel}
            className="TodoForm-button TodoForm-button--cancel"
            type="button">
                Cancelar
            </button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">
                Añadir ToDo
            </button>
            </div>
        </form>
    )
}

export {TodoForm}