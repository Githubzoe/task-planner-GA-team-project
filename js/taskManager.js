// Create the HTML for a task
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => `
    <li class="project__item" id="task${id}" data-task-id=${id}>
        <a href="#" class="project__link focus--box-shadow d-flex justify-content-around">
            <div class="project__wrapper d-flex align-items-center justify-content-between">
                <div class="info-icon" data-toggle="collapse" href="#collapse${id}" role="button" aria-expanded="false" aria-controls="collapseTaskDescription">
                    <i class="fas fa-info-circle"></i>
                </div>
                <div class="project__element project__inform col-3" data-toggle="collapse" href="#collapse${id}" role="button" aria-expanded="false" aria-controls="collapseTaskDescriptio">
                    <span class="project__inform-name">${name}</span>
                </div>
                <div class="project__element project__assignee col-2" data-toggle="collapse" href="#collapse${id}" role="button" aria-expanded="false" aria-controls="collapseTaskDescription">
                    <span class="project__assignee-name">${assignedTo}</span>
                </div>
                <div class="project__element project__date col-2 pl-3" data-toggle="collapse" href="#collapse${id}" role="button" aria-expanded="false" aria-controls="collapseTaskDescription">
                    <time class="date" datetime="2020-05-05T10:00:00">${dueDate}</time>
                </div>
                <div class="project__element project__status col-2 pl-4" data-toggle="collapse" href="#collapse${id}" role="button" aria-expanded="false" aria-controls="collapseTaskDescription">
                    <span class="status text-white font-weight-bold p-1 rounded ${status}">${status}</span>
                </div>
                <div class="project__element project__setting col-3 d-flex">
                    <button class="btn btn-sm btn-outline-success done-button p-1 d-flex justify-content-center align-self-center align-items-center ${status !== 'DONE' ? 'visible' : 'invisible'}">Mark As Done</button>
                    <button class="btn edit-btn focus--box-shadow d-flex align-items-center justify-content-center ml-3" type="button">
                        <img src="img/edit.png" alt="">
                    </button>
                    <button class="btn delete-btn focus--box-shadow-delete d-flex align-items-center justify-content-center ml-3 pr-2 mr-3" type="button">
                        <img src="img/trash.png"/>
                    </button>
                </div>
            </div>
        </a>
        <div class="collapse" id="collapse${id}">
        <div class="card card-body discription">
          <p class="font-weight-bold lh-lg">Description</p>
          <p>${description}</p>
        </div>
      </div>
    </li>
`;



// Create a TaskManager class
export class TaskManager {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    // Create the addTask method
    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        };
        // Push the task to the tasks property
        this.tasks.push(task);  
    }
    getTaskById(taskId) {
        // Create a variable to store the found task
        let foundTask;

        // Loop over the tasks and find the task with the id passed as a parameter
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if its the right task by comparing the task's id to the id passed as a parameter
            if (task.id === taskId) {
                // Store the task in the foundTask variable
                foundTask = task;
            }
        }

        // Return the found task
        return foundTask;
    }

    render() {
        // Create an array to store the tasks' HTML
        const tasksHtmlList = [];

        // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Format the date
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status, task.id);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }

        // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }
}