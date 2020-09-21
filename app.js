// selectors
    const todoInput         = document.querySelector("todo-input");
    const todoButton        = document.querySelector("button");
     const todoList          = document.getElementById("list");

// Evnet Listeners


    todoButton.addEventListener("click", addTodo);



// functions

function addTodo(event){
    // prevent from submitting
    event.preventDefault();
    console.log("hello")
    // Todo div
    const todoDiv = document.getElementById('harsh')
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText ='hey';
    newTodo.classList.add('item');
    todoDiv.appendChild(newTodo);

    // Check Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("btn");
    todoDiv.appendChild(completedButton);

       // Check trash button
       const trashButton = document.createElement('button');
       trashButton.innerHTML = '<i class="fas fa-trash"></i>'
       trashButton.classList.add("btn");
       todoDiv.appendChild(trashButton);

        // Append to list  
       
    todoList.appendChild(todoDiv);

        
       
    
}