document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  
  const createTaskForm = document.getElementById('create-task-form');
  const newTaskDesc = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById('new-task-priority');
  
  const taskUl = document.getElementById('tasks');
  
  const renderIt = () => (taskUl.innerHTML = taskList.renderTasks());
  
  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDesc.value);
    
    e.target.reset();
    renderIt();
  });
  
  taskUl.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      taskList.deleteTask(e.target.dataset.desc);
      renderIt();
    }
  })
  
});
