import React, {useState} from 'react';
import { IoMdAdd } from "react-icons/io";
function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // setTodoName(event.target.value);
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    // setDueDate(event.target.value);
    setDueDate(event.target.value);
  };

  const handleButtonClicked = () => {
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" 
          value={todoName}
          onChange= {handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" 
          value={dueDate}
          onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={handleButtonClicked}
          >
           <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;