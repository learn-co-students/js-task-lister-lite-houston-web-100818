
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const taskForm = document.querySelector('#create-task-form')
  const taskDescription = document.querySelector('#new-task-description')
  const taskPriority = document.querySelector('#new-task-priority')
  const tasksOnPage = document.querySelector('#tasks')


  taskForm.addEventListener('submit', () => {
    event.preventDefault();
    taskList.createNewTask(taskDescription.value, taskPriority.value);
    taskDescription.value = ''
    taskPriority.value = ''
    render()
  })

  tasksOnPage.addEventListener('click', function(event) {
    if (event.target.nodeName === 'BUTTON') {
      taskList.deleteTask(event.target.dataset.description)
    }
    render()
  })

  const render = function() {
    tasksOnPage.innerHTML = taskList.renderTasks()
  }
});
