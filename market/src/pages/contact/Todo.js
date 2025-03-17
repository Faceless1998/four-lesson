import React, {useState, useEffect} from "react";



const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
            const savedTodos = JSON.parse( localStorage.getItem("tasks") )
            if( savedTodos ){
                setTasks(savedTodos)
            }
        },[]
    );

    useEffect( () => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])



    const addTask = () => {
        if(inputValue.trim() === "" ){
            return;
        }
        setTasks([...tasks, inputValue]);
        setInputValue("");
    }

    const removeTask = (index) => {
        setTasks( tasks.filter( ( _ , i) => 
            i !== index
         ) );
    }

    return(
        <>
        <div>
            <input type="text" value={inputValue} 
            onChange={ (e) => setInputValue(e.target.value) }
            placeholder="შეიყვანეთ" />
            <button onClick={addTask}>დაამატე</button>
        </div>
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className="mylist"> {task} 
                <button onClick={ () => {removeTask(index)} }>delete</button>
                </li>
            ) )}
        </ul>
        </>
    )
}

export default Todo;