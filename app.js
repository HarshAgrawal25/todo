// selectors
    const todoInput         = document.querySelector("todo-input");
    const todoButton        = document.querySelector("button");
    // const todoList          = document.querySelector("todo-list ");

// Evnet Listeners

if(todoButton){
    todoButton.addEventListener("click", addTodo);
}


// functions

function addTodo(event){
    event.preventDefault();
    console.log("hello")


    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText ='hey';
    newTodo.classList.add('todo-item');
}