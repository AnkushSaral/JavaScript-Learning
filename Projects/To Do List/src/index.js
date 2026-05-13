// ==========================
// DATA
// ==========================
let todos = getLocalStorageTodo();








// ==========================
// DOM ELEMENTS
// ==========================
let todoContainer = document.querySelector(".todo-container");
let addTaskButton = document.querySelector(".add-task-button");
let dialog = document.querySelector("dialog");

// ==========================
// TEMPLATE
// ==========================
let todoTemplate = `
<div class="w-full h-auto text-white flex justify-between items-center">
  <div class="w-[13%] flex justify-center items-center">
    <input
      type="checkbox"
      name=""
      id=""
      class="accent-[#1ced9d] size-5 cursor-pointer"
    />
  </div>

  <div class="w-[60%] h-auto break-all">
    <p></p>
  </div>

  <div class="edit-button w-[13%] flex justify-center items-center">
    <img
      src="../images/Edit-Icon.svg"
      class="invert cursor-pointer size-8 active:size-7"
      alt="Edit"
    />
  </div>

  <div class="delete-button w-[13%] h-full flex justify-center items-center">
    <img
      src="../images/Delete-Icon.svg"
      class="invert cursor-pointer size-8 active:size-7"
      alt="Delete"
    />
  </div>
</div>
`;

// ==========================
// RENDER FUNCTION
// ==========================
function updateToDo() {
  todoContainer.innerHTML = "";

  todos.forEach((element, index) => {
    let div = document.createElement("div");
    div.innerHTML = todoTemplate;

    // Event bindings
    div.querySelector("input").onclick = (e) => {
      statusChange(e, index);
    };

    div.querySelector(".delete-button").onclick = (e) => {
      deleteTask(index);
    };
    
    div.querySelector(".edit-button").onclick = (e) => {
      editTask(div, index);
    };

    // Data binding
    let [status, task] = element;

    let checkbox = div.querySelector("input");
    let text = div.querySelector("p");

    checkbox.checked = status;
    text.innerText = task;
    text.style.textDecoration = status ? "line-through" : "none";

    // Append to container
    todoContainer.insertAdjacentElement("afterbegin", div);
  });

  //Updating local storage
  setLocalStorageTodo();
}

// ==========================
// ACTION FUNCTIONS
// ==========================

// Toggle checkbox
function statusChange(e, index) {
  todos[index][0] = e.target.checked;
  updateToDo();
}

// Delete task
function deleteTask(index) {
  todos.splice(index, 1);
  updateToDo();
}

// Add new task
function addTask() {
  let inputText = document.querySelector(".input-text").value;

  if (inputText) {
    todos.push([false, inputText]);
    document.querySelector(".input-text").value = "";
  }

  updateToDo();
}

//Dialog Close
function dialogClose(){
    dialogClear();
    dialog.classList.remove("flex");
    dialog.classList.add("hidden");
}
//Dialog Open
function dialogOpen(text){
    dialog.querySelector("textarea").value = text;
    dialog.classList.remove("hidden");
    dialog.classList.add("flex");
}
//Dialog Clear
function dialogClear(){
    dialog.querySelector("textarea").value = "";
}
//Dialog Save
function dialogSave(text, index){
        todos[index][1] = text;
        updateToDo();
        dialogClose();
}

function editTask(div, index){
     let text = div.querySelector("p").innerText;
     dialogOpen(text);
     dialog.querySelector(".close-dialog-button").onclick = e => {dialogClose();} 
     dialog.querySelector(".save-dialog-button").onclick = e => {
       let updatedText = dialog.querySelector("textarea").value;
       dialogSave(updatedText, index)
    } 
}


// Set todos in local storage
function setLocalStorageTodo(){
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Get todos from local storage
function getLocalStorageTodo(){
  return JSON.parse(localStorage.getItem("todos"));
}


// ==========================
// EVENT LISTENERS
// ==========================
addTaskButton.onclick = () => {
  addTask();
};

// ==========================
// INITIAL RENDER
// ==========================
updateToDo();

