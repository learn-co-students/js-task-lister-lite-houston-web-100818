class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    this.tasks.push(new Task(description))
  }

  renderTasks() {
    let tasksRendered = ''
    this.tasks.forEach(function(task) {
      tasksRendered += task.render()
    })
    return tasksRendered
  }
}
