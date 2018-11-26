
document.addEventListener("DOMContentLoaded", () => {
  // Initialize new Task List
  const taskList = new TaskList();

  // DOM Elements
  const taskForm = document.querySelector('#create-task-form')
  const textInput = document.querySelector('#new-task-description')
  const tasksOnPage = document.querySelector('#tasks')

  taskForm.addEventListener('submit', () => {
    event.preventDefault();
    taskList.createNewTask(textInput.value);
    textInput.value = ''
    render()
  })

  // Helper Functions
  const render = function() {
    tasksOnPage.innerHTML = taskList.renderTasks()
  }
});
