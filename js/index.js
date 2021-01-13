import {TaskManager} from './taskManager.js'
// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// load the tasks from localStorage
taskManager.load();

// render the tasks to the page
taskManager.render();

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

  // Get the values of the inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;
  const status = newTaskStatus.value;

  // Add the task to the task manager
    taskManager.addTask(name, description, assignedTo, dueDate, status); 

  // Render the tasks
  taskManager.render();
  
  //clear validation
  clearValidation();

  //clear form 
  newTaskForm.reset();

  //close form
  $("#newtaskinput").modal("hide")
  }
});



// Select the Tasks List
const tasksList = document.querySelector('#tasksList');

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);

        // Update the task status to 'DONE'
        task.status = 'DONE';

        // save the tasks to localStorage
        taskManager.save();
        // Render the tasks
        taskManager.render();
    }
});

//function to clear the validation
function clearValidation(){
  newTaskForm.classList.remove('was-validated');
}