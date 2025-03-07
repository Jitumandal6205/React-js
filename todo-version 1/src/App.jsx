
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";


function App() {
 
    const [todoItems, setTodoItems] = useState([]);

    const handleNewItem = (itemName, itemDueDate) => {
      const newTodoItems = [...todoItems,{name: itemName,
        dueDate: itemDueDate} 
      ];
      setTodoItems(newTodoItems);
    };

    const handleDeleteItem = (todoItemName) => {
      const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
      setTodoItems(newTodoItems);
      // console.log(`Item deleted: ${todoItemName}`);
  
    }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem = {handleNewItem}/>
        {todoItems.length === 0 && <WelcomeMessage/>} 
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;