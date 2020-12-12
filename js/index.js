// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');



// Validation 
newTaskNameInput.addEventListener("input", function (event) {
    validation(event.target, notEmptyandNotBlank(event.target.value, 0));
});
newTaskDescription.addEventListener("input", function (event) {
    validation(event.target, notEmpty(event.target.value, 0));
});
newTaskAssignedTo.addEventListener("input", function (event) {
    validation(event.target, notEmpty(event.target.value, 0));
});




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


    // Validation code here


    // Get the values of the inputs
    
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    const status = newTaskStatus.value;
    const priority = newTaskPriority.value;


    if(!validTaskFormInput(name)){
        taskNameErrorMessage.innerHTML = "Task name cannot be empty. Please enter a task name.";
        taskNameErrorMessage.style.display = "block"
    }else{
        taskNameErrorMessage.style.display = "none";
    };
    if(!validTaskFormInput(description)){
        taskDescriptionErrorMessage.innerHTML = "Task description cannot be empty. Please enter a task description.";
        taskDescriptionErrorMessage.style.display = "block"
    }else{
        taskDescriptionErrorMessage.style.display = "none"
    };
    if(!validTaskFormInput(dueDate)){
        dueDateErrorMessage.innerHTML = "You didn't choose the due date. <br> Please choose a due date.";
        dueDateErrorMessage.style.display = "block"
    }else{
        dueDateErrorMessage.style.display = "none"
    };
    if(!validTaskFormInput(assignedTo)){
        assignedToErrorMessage.innerHTML = "Assigned To cannot be empty. <br> Please enter (an) assignee(s).";
        assignedToErrorMessage.style.display = "block"
    }else{
        assignedToErrorMessage.style.display = "none"
    };
    if(!validTaskFormInput(status)){
        statusErrorMessage.innerHTML = "You didn't select the status. <br> Please select a status.";
        statusErrorMessage.style.display = "block"
    }else{
        statusErrorMessage.style.display = "none"
    };
    if(!validTaskFormInput(priority)){
        priorityErrorMessage.innerHTML = "You didn't select the priority. <br> Please select a priority.";
        priorityErrorMessage.style.display = "block"
    }else{
        priorityErrorMessage.style.display = "none"
    };
});


function notEmptyandNotBlank(taskItem, number) {
    return taskItem && taskItem.length > number && taskItem.trim().length !==0;
}
function notEmpty(taskItem, number) {
    return taskItem && taskItem.length > number;
}
function validTaskFormInput(data){
    return data !== null && data !== '';
}
function validation(taskItem, boolean){
    if(boolean){
        taskItem.classList.remove("is-invalid");
    } else {
        taskItem.classList.add("is-invalid");
    }
}

