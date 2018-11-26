// DOM Elements
const taskDescription = document.querySelector("#new-task-description");
const taskInput = TaskForm.querySelector("#new-task-input");
const tasksList = document.querySelector("#tasks-list");
const submitButton = document.querySelector("#submit");

// Data
let tasks = [];

// Event Listeners
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  tasks.push(taskInput.value);
  taskInput.value = "";
  render();
});

// Render
const render = function() {
  tasksList.innerHTML = ``;
  tasks.forEach(function(task) {
    tasksList.innerHTML += `
            <p>${task}</p>
        `;
  });
};

const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.addEventListener("click", function(event) {
  let indexOfTask = tasks.indexOf(task);
  tasks.splice(indexOftask, 1);
  render();
});
