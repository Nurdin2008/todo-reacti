import {useState} from "react";


const TodoInput = (props) => {
    const [value, setValue] = useState( "")

    const handleClick = () => {
        if(value.trim() === "") {
            return;
        }
        props.addNewTask(value)
    }

    const onChange = (e) => {
        const text = e.target.value;
        setValue(text)
    }

    return (
        <div className="d-flex gap-3">
            <input value={value} onChange={onChange} className="form-control" type="text" placeholder="New Todo" />
            <button className="btn btn-primary w-25" onClick={handleClick}> add new todo </button>
        </div>
    )
}


export default TodoInput;