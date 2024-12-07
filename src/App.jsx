import { useState } from 'import TodoInput from "./components/todo-input/TodoInput.jsx";
import TodoList from "./components/todo-list/TodoList.jsx";
import {useState} from "react";

const tasks = [
    {
        id: 1,
        name: "Learn React Basic",
        completed: false,
    },
    {
        id: 2,
        name: "Learn JS Basic",
        completed: true,
    },
]
// command + d
const App = () => {

    const [state , setState] = useState(tasks)

    const addNewTask = (name = "Hello") => {
        const ids = state.map(value => value.id);
        const maxId = Math.max(...ids, 0);

        const newTask = {
            id: maxId + 1,
            name,
            completed: false,
        }


        // tasks.push(newTask) SPREAD REST ...
        setState( [...state, newTask])
        console.log(tasks)
    }
    // state - состояния
    // props


    const deleteTask = (id) => {
        const filteredTasks = state.filter(value => value.id !== id)
        setState(filteredTasks)
    }


    return (
        <div className={"container mx-auto"}>
            <TodoInput addNewTask={addNewTask} />
            <TodoList deleteTasks={deleteTask} tasks={state}/>
        </div>
    )
}


export default App;

