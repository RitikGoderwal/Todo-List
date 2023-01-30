import React,{useState} from 'react'
import './App.css'
// todolist project.
function App(){
    const [todoList,setTodoList] = useState([]);
    const [newTask,setNewTask] = useState([""]);

    const handlechange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask =( ) => {
        const task = {
            id:todoList.length === 0 ? 1 : todoList[todoList.length -1].id+1 ,
            taskName: newTask,
        };
        const newTodoList = [...todoList,task];
        setTodoList(newTodoList);
    }

    const deleteTask = (id) => {
        const newTodoList = todoList.filter((task) =>{
            if(task.id === id){
                return false;
            }else{
                return true;
            }
        });
        setTodoList(newTodoList);
    }
    return <diV className = "App">
     <div className='addTask'>
        <h1>Todo List</h1>
        <input onChange={handlechange} />
        <button onClick={addTask}>Add task</button>
     </div>
     <div className='list'>
     {todoList.map((task) =>{
     return( <div className='list-item'>
          <h3>{task.taskName}</h3>
          <button onClick={() => deleteTask(task.id )}>X</button>
        </div>
     );  
    })}
     
    </div>
    </diV> 
}

export default App;