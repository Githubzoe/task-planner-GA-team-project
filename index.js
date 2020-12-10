// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const taskNameErrorMessage = document.querySelector('#taskNameAlertMessage');
    const taskDescriptionErrorMessage = document.querySelector('#taskDescriptionAlertMessage');
    const dueDateErrorMessage = document.querySelector('#dueDateAlertMessage');
    const assignedToErrorMessage = document.querySelector('#assignedToAlertMessage');
    const statusErrorMessage = document.querySelector('#statusAlertMessage');
    const priorityErrorMessage = document.querySelector('#priorityAlertMessage');
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    const status = newTaskStatus.value;
    const priority = newTaskPriority.value;
    if(!validTaskNameInput(name)){
        taskNameErrorMessage.innerHTML = "Task name cannot be blank. Please enter a task name.";
        taskNameErrorMessage.style.display = "block"
    }else{
        taskNameErrorMessage.style.display = "none";
    };
    if(!validTaskDescriptionInput(description)){
        taskDescriptionErrorMessage.innerHTML = "Task description cannot be blank. Please enter a task description.";
        taskDescriptionErrorMessage.style.display = "block"
    }else{
        taskDescriptionErrorMessage.style.display = "none"
    };
    if(!validDueDateInput(dueDate)){
        dueDateErrorMessage.innerHTML = "You either did not choose the due date or the date you have chosen was in the past. <br> Please choose a date that's not in the past.";
        dueDateErrorMessage.style.display = "block"
    }else{
        dueDateErrorMessage.style.display = "none"
    };
    if(!validAssignedToInput(assignedTo)){
        assignedToErrorMessage.innerHTML = "Assigned To cannot be blank. <br> Please enter (an) assignee(s).";
        assignedToErrorMessage.style.display = "block"
    }else{
        assignedToErrorMessage.style.display = "none"
    };
    if(!validStatusInput(status)){
        statusErrorMessage.innerHTML = "You didn't select the status. <br> Please select a status.";
        statusErrorMessage.style.display = "block"
    }else{
        statusErrorMessage.style.display = "none"
    };
    if(!validPriorityInput(priority)){
        priorityErrorMessage.innerHTML = "You didn't select the priority. <br> Please select a priority.";
        priorityErrorMessage.style.display = "block"
    }else{
        priorityErrorMessage.style.display = "none"
    };
});



function validTaskNameInput(name){
    return name !== null && name !== '';
}
function validTaskDescriptionInput(description){
    return description !== null && description !== '';
}
function validDueDateInput(dueDate){
    return dueDate !== null && dueDate !== '';
}
function validAssignedToInput(assignedTo){
    return assignedTo !== null && assignedTo !== '';
}
function validStatusInput(status){
    return status !== null && status !== '';
}
function validPriorityInput(priority){
    return priority !== null && priority !== '';
}