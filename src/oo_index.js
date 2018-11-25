const submitButton = document.querySelector('[value="Create New Task"]')
const taskInput = document.querySelector('#new-task-description')
const tasksList = document.querySelector('#tasks')

let allTasks = [];

submitButton.addEventListener('click', function(e){
  e.preventDefault()
  
      allTasks.push(taskInput.value)
      taskInput.value = ''
      render();
})

const render = function(){
  tasksList.innerHTML = ``
  allTasks.forEach(function(task){
      tasksList.innerHTML += `
          <li>${task}</li>`
      
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'

    deleteButton.addEventListener('click', function(event){
      
    let indexOfTask = allTasks.indexOf(task)
    allTasks.splice(indexOfTask, 1)
    render()
    })
  })  
}

render();