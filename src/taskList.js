class TaskList {
  constructor() {
    this.tasks = [];
  }
  
  createNewTask(desc) {
    const newTask = new Task(desc);
    this.tasks.push(newTask);
  }
  
  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }
  
  deleteTask(desc) {
    this.tasks = this.tasks.filter((task) => task.desc !== desc);
  }
}
