// DOM elements
const taskDescriptionField = document.getElementById("new-task-description");
const taskPriority = document.getElementById("new-task-priority")
const submitTaskButton = document.getElementById("submit-button");
const taskList = document.getElementById("tasks");

// data
const taskListArray = [];

// event listeners
submitTaskButton.addEventListener('click', function(e){
    e.preventDefault()
    splitInput(taskDescriptionField.value).forEach(function(item){
        taskListArray.push(item.trim())
    })
    taskDescriptionField.value = ''
    render()
});

// Render
const render = function(){
    taskList.innerHTML = ``
    taskListArray.forEach(function(task, index){
        renderTask(task,index)
    })
}

const renderTask = function(task,index){
    let doneButton = createDeleteButton(index)
    let listItem = document.createElement('li')
    let text = document.createTextNode(task + " ")
    listItem.appendChild(text)
    listItem.append(doneButton)
    listItem.setAttribute("class", taskPriority.value)
    taskList.append(listItem)
}

// Helpers
const splitInput = function(input){
    return input.split(",")
}

const createDeleteButton = function(index){
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'done'
    deleteButton.addEventListener('click', function(){
        taskListArray.splice(index,1)
        render()
    })
    return deleteButton;
}