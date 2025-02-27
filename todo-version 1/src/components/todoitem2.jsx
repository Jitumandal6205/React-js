function TodoItem2 (){

    let TodoName = "Go to college";
    let DueDate = "27/2/2025";
  return (<div class="container">

    <div class="row kg-row">
    <div class="col-6">{TodoName}
    </div>
    <div class="col-4">
      {DueDate}
    </div>
     <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
    </div>
    </div>
    );
}

export default TodoItem2;