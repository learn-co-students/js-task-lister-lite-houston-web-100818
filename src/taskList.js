// The controller transfers information between the model and the view.
//TaskList is your controller.
// It puts information onto the DOM and can read information from it.
// Just like in Rails, your controller can read params
//and instantiate new objects which it will then render on the DOM

const submitButton = document.querySelector('[type="submit"]')
const createTaskForm = document.querySelector('#create-task-form')
const newTaskDescription = createTaskForm.querySelector('[name="new-task-description"]')
const taskList = document.querySelector('#tasks')


function show(thing){
  console.log(thing)
};

let tasks = [];
let index = 0;

submitButton.addEventListener('click', function(e){
  e.preventDefault();
  const newTask = new Task(newTaskDescription.value);
  tasks.push(newTask)
  index = tasks.length - 1;

  let listItem = document.createElement('li');
  listItem.innerHTML = newTaskDescription.value;
  listItem.id = index;
  taskList.appendChild(listItem);

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.name = 'del';
  listItem.appendChild(deleteButton);
  newTaskDescription.value = ''

  deleteButton.addEventListener('click', function(e){
    listItem.remove();
  });

});
