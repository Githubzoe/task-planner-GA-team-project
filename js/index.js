import {TaskManager} from './taskManager.js'
// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add Event Listener for Form Submission
newTaskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // newTaskForm.classList.add('was-validated');

  //Form Validation 
  if (!newTaskForm.checkValidity()) {
    newTaskForm.classList.add('was-validated');
  } else {

      // Select the inputs
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const newTaskDescription = document.querySelector('#newTaskDescription');
  const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
  const newTaskDueDate = document.querySelector('#newTaskDueDate');
  const newTaskStatus = document.querySelector('#newTaskStatus');
  const newTaskPriority = document.querySelector('#newTaskPriority');

  // Get the values of the inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;
  const status = newTaskStatus.value;
  const priority = newTaskPriority.value;

  // Add the task to the task manager
  taskManager.addTask(name, description, assignedTo, dueDate, status, priority); 

  // Render the tasks
  taskManager.render();
  
  //clear validation
  clearValidation();

  //clear form 
  newTaskForm.reset();
  }
});

//function to clear the validation
  function clearValidation(){
    newTaskForm.classList.remove('was-validated');
  }


