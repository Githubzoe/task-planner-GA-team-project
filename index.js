// Select the New Task Form
const newTaskForm = document.querySelector('#newtaskinput');

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
    if(!validTaskNameInput(name) || !validateBlankSpace(name)){
    // if(!validTaskNameInput(name)){
        taskNameErrorMessage.innerHTML = "Task name cannot be empty. Please enter a task name.";
        taskNameErrorMessage.style.display = "block"
    }else{
        taskNameErrorMessage.style.display = "none";
    };
    if(!validTaskNameInput(description) || !validateBlankSpace(description)){
        taskDescriptionErrorMessage.innerHTML = "Task description cannot be empty. Please enter a task description.";
        taskDescriptionErrorMessage.style.display = "block"
    }else{
        taskDescriptionErrorMessage.style.display = "none"
    };
    // if(!validTaskNameInput(dueDate) || !validateDueDateYear(dueDate)){
    if(!validTaskNameInput(dueDate)){    
        dueDateErrorMessage.innerHTML = "You didn't choose the due date. <br> Please choose a due date.";
        dueDateErrorMessage.style.display = "block"
    }else{
        dueDateErrorMessage.style.display = "none"
    };
    if(!validTaskNameInput(assignedTo) || !validateBlankSpace(assignedTo)){
        assignedToErrorMessage.innerHTML = "Assigned To cannot be empty. <br> Please enter (an) assignee(s).";
        assignedToErrorMessage.style.display = "block"
    }else{
        assignedToErrorMessage.style.display = "none"
    };
    if(!validTaskNameInput(status)){
        statusErrorMessage.innerHTML = "You didn't select the status. <br> Please select a status.";
        statusErrorMessage.style.display = "block"
    }else{
        statusErrorMessage.style.display = "none"
    };
    if(!validTaskNameInput(priority)){
        priorityErrorMessage.innerHTML = "You didn't select the priority. <br> Please select a priority.";
        priorityErrorMessage.style.display = "block"
    }else{
        priorityErrorMessage.style.display = "none"
    };
});



function validTaskNameInput(data){
    return data !== null && data !== '';
}
// function validTaskDescriptionInput(description){
//     return description !== null && description !== '';
// }
// function validDueDateInput(dueDate){
//     return dueDate !== null && dueDate !== '';
// }
// function validAssignedToInput(assignedTo){
//     return assignedTo !== null && assignedTo !== '';
// }
// function validStatusInput(status){
//     return status !== null && status !== '';
// }
// function validPriorityInput(priority){
//     return priority !== null && priority !== '';
// }

function validateBlankSpace (data){
    if (data.trim().length === 0){
        return false;
    } else {
        return true};
};

// not working ---
function validateDueDateYear(data){
    let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!(date_regex.test(data))){
        return false;
    }else {
        return true;
    }
};