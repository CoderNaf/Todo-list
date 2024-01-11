import './TodoItem.css';
import { IoMdCheckboxOutline } from "react-icons/io";
import { BsFillBackspaceFill } from "react-icons/bs";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <IoMdCheckboxOutline className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <span >
        X
      </span> */}
      <BsFillBackspaceFill  className="Icon Icon-delete"
      onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };