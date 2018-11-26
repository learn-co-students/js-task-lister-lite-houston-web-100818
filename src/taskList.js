class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description, priority) {
    this.tasks.push(new Task(description, priority))
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter(function(task) {
      return task.description !== description
    })
  }

  renderTasks() {
    let tasksRendered = ''
    this.tasks.sort(function(a,b) {
      return a.priority - b.priority
    }).forEach(function(task) {
      tasksRendered += task.render()
    })
    return tasksRendered
  }
}
