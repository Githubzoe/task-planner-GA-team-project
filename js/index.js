// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);


// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');


// Select the inputs
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDescription = document.querySelector('#newTaskDescription');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');


// Form Validation 
newTaskForm.addEventListener('submit', function(event) {



  // Get the values of the inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;


  // Add the task to the task manager
  taskManager.addTask(name, description, assignedTo, dueDate);
  console.log(taskManager.tasks);

  if (newTaskForm.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  newTaskForm.classList.add('was-validated');
  
  


})
  // Clear the form
  newTaskNameInput.value = '';
  newTaskDescription.value = '';
  newTaskAssignedTo.value = '';
  newTaskDueDate.value = '';