
const ToDoList = ({tasks})=>{



return(

    <ul>
      {tasks.map((task, index) => (
        <li key={index}>📌{task}</li>
      ))}
    </ul>
)

}

export default ToDoList;