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
    // const errorMessages = [taskNameErrorMessage, taskDescriptionErrorMessage, dueDateErrorMessage,assignedToErrorMessage,statusErrorMessage,priorityErrorMessage];
    // const openNewTask =document.querySelector("#openNewTask");
    // openNewTask.addEventListener("click", clearValidation());
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
    // const taskDetails = [name, description, assignedTo, dueDate, status, priority];

    // newTaskDueDate.addEventListener("input", function(event){
    //     const today = todayConvertor();
    //     const dueDate = new Date(event.target.value);
    //     validation(event.target, today <= dueDate);
    // });


    if(!validTaskNameInput(name)){
        taskNameErrorMessage.innerHTML = "Task name cannot be empty. Please enter a task name.";
        taskNameErrorMessage.style.display = "block"
    }else{
        taskNameErrorMessage.style.display = "none";
    };
    if(!validTaskDescriptionInput(description)){
        taskDescriptionErrorMessage.innerHTML = "Task description cannot be empty. Please enter a task description.";
        taskDescriptionErrorMessage.style.display = "block"
    }else{
        taskDescriptionErrorMessage.style.display = "none"
    };
    if(!validDueDateInput(dueDate)){
        dueDateErrorMessage.innerHTML = "You didn't choose the due date. <br> Please choose a due date.";
        dueDateErrorMessage.style.display = "block"
    }else{
        dueDateErrorMessage.style.display = "none"
    };
    if(!validAssignedToInput(assignedTo)){
        assignedToErrorMessage.innerHTML = "Assigned To cannot be empty. <br> Please enter (an) assignee(s).";
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

//     function clearValidation(){
//         errorMessages.map(item=>item.style.display = "none");
//     }
// });



// function clearValues(){
//     taskDetails.map(item=>item.value=null);
//     selectPriority.map(priority => priority.selected = false);
//     selectStatus.map(status => status.selected = false);
// }



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
// function todayConvertor(){
//     const today = new Date();
//     return today.setHours(0,0,0,0);
// }
// function validation(taskItem, boolean){
//     if(boolean){
//         taskItem.classList.remove("is-invalid");
//         taskItem.classList.add("is-valid");
//     } else {
//         taskItem.classList.remove("is-valid");
//         taskItem.classList.add("is-invalid");
//     }

// }