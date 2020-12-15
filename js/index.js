// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);


// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');


// Add Event Listener for Form Submission
newTaskForm.addEventListener('submit', function(event) {


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


  // Form Validation 
  if (newTaskForm.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  } 
  newTaskForm.classList.add('was-validated');


  // Add the task to the task manager
  taskManager.addTask(name, description, assignedTo, dueDate, status, priority);
  // console.log(taskManager.tasks);

    
    // Clear the form
  // newTaskNameInput.value = '';
  // newTaskDescription.value = '';
  // newTaskAssignedTo.value = '';
  // newTaskDueDate.value = '';
})
