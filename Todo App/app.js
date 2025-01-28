let addButton = document.querySelector(".add-btn");
let inputField = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list");
addButton.addEventListener("click",function(){
    let taskText = inputField.value.trim();
    if(taskText === ''){
        alert("Please enter a task.");
        return;
    }
    let listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    listItem.textContent = taskText;
    todoList.appendChild(listItem);
    let deleteButton = document.createElement("button");
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", function(){
        listItem.remove();
    });
    listItem.append(deleteButton);
    inputField.value = '';
});
inputField.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
        addButton.click();
    }
});