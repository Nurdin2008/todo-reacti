function TodoList (props) {
    // props - это object
    console.log(props)

    if (props.tasks.length === 0) {
        return (
            <div className={"text-center"}>
                <img src={https://cdn.dodostatic.net/site-static/dist/assets/5aa5dac99a832c62f3ef..svg
                }><img/>
               <h2>Пока тут проста </h2>
            </div>
        )
    }
    return <div>
        <h2 className={"text-center"}> Todo List</h2>
        <div className={"d-flex justify-content-between"}>
            <button className={"btn btn-primary w-25"}>All</button>
            <button className={"btn btn-primary w-25"}> Todo </button>
            <button className={"btn btn-primary w-25"}> Done </button>
        </div>

        <ul className={"list-group mt-5"}>
            {props.tasks.map( (value, index, _) => {
                return (
                    <li key={index} className={"list-group-item d-flex justify-content-between"}>
                        <span> {value.name}</span>
                        <span className={"d-flex gap-3"}>
                    <input type="checkbox" defaultChecked={value.completed}/>
                    <span className={"btn btn-primary"}> edit</span>
                    <span onClick={() => {
                        props.deleteTasks(value.id)
                    }} className={"btn btn-danger"}> delete</span>
                </span>
                    </li>
                )
            })}
        </ul>
    </div>

}


export default TodoList;