import React, {useState} from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("");

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
            <input type="text" value={inputValue} placeholder="შეიყვანეთ" />
            <button onClick={addTask}>დაამატე</button>
        </div>
        <ul>
            {tasks.map((task, index) => () )}
        </ul>
        </>
    )
}

export default Todo;