document.addEventListener("DOMContentLoaded", function () {
let todoInput = document.getElementById("input-todo");
let todoBtn = document.getElementById("btn-todo");
let todoItems = document.getElementById("todo-item");

todoBtn.addEventListener("click", function (){

    function addTodoItem() {
    if (todoInput.value) {

        let items = document.createElement("p");
        items.innerHTML = todoInput.value;
        items.id="paragraph"
        
        
        let removeBtn = document.createElement("button")
        removeBtn.id="remove-btn";
        removeBtn.innerHTML = "-";
        removeBtn.classList.add("btn" , "btn-danger", "ms-5")
        removeBtn.id = "remove-btn"
        items.appendChild(removeBtn);
        
        
        todoItems.appendChild(items)
        todoInput.value = "";
        
        
        removeBtn.addEventListener("click",()=>{
            items.remove()
        })
        
        
    }  
    else {
        alert("Please enter a todo item.")
    }
}
    todoBtn.addEventListener("click", addTodoItem())

      todoInput.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            addTodoItem();
        }
      })
})
})
