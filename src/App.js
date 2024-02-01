
import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {

const [task, addTask]=useState(""); //creo una costante vuota per il singolo task con funzione
const [tasks, setTasks] = useState([]);//creo array con funzione che conterrà i tasks

const handleChange=(e)=>{//leggo il valore dell'input
  addTask(e.target.value);

}


const handleAddTask =()=>{//se il valore dell'input non è vuoto, aggiungo all'array tasks il task inserito

  if (task.trim() !== "") {
    setTasks([...tasks, task]);
    addTask("");//resetto l'input
  }

}



  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='box-uno'>
        <input onChange={handleChange} type='text' placeholder='your task' value={task}></input>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className='box-due'>
        <ToDoList tasks={tasks}></ToDoList>
      </div>
     
    </div>
  );
}

export default App;
