import { useState } from "react"
import './todolist.css'

function ToDoList(){
    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>i !== index));
    }

    function moveTaskUp(index){
        if(index!==0){
            const newItems = [...tasks];
            const item = newItems.splice(index, 1)[0];
            newItems.splice(index-1, 0, item);
            setTasks(newItems);
        }
    }

    function moveTaskDown(index){
        if(index!==tasks.length){
            const newItems = [...tasks];
            const item = newItems.splice(index, 1)[0];
            newItems.splice(index+1, 0, item);
            setTasks(newItems);
        }
    }

    return(
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange }></input>

            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index)=>
            <li key={index}>
            <span className="text">
                {task}
            </span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}>👆🏻</button>
            <button className="move-button" onClick={()=>moveTaskDown(index)}>👇🏻</button>
            </li>)}
        </ol>
    </div>)
}

export default ToDoList