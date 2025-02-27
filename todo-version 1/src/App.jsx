import AppName from "./components/appname";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem1";
import TodoItem2 from "./components/todoitem2";
import "./App.css";
function App() {
  

  return  <center className= 'todo-container'>
        <AppName/>
        <AddTodo/>
        <div className="Todo-items">
        <TodoItem/>
        <TodoItem2/>
        </div>
       
  </center> 
  
}

export default App
