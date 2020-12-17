// Create the HTML for a task
const createTaskHtml = (name, description, assignedTo, dueDate, status, priority, id) => `
    <li class="project__item" id="task${id}">
        <a href="#" class="project__link focus--box-shadow d-flex justify-content-around">
        <div class="project__wrapper d-flex align-items-center justify-content-between" data-toggle="collapse" href="#collapse${id}" role="button" aria-expanded="false" aria-controls="collapseExample1">
        <div class="myTest custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <label class="custom-control-label" for="customCheck1"></label>
        </div>
        <div class="project__element project__inform col-3">
            <span class="project__inform-name">${name}</span>
        </div>
        <div class="project__element project__assignee col-2">
            <span class="project__assignee-name">${assignedTo}</span>
        </div>
        <div class="project__element project__date col-2">
            <time class="date" datetime="2020-05-05T10:00:00">${dueDate}</time>
        </div>
        <div class="project__element project__status col-2">
            <span class="status text-white font-weight-bold p-1 rounded ${status}">${status}</span>
        </div>
        <div class="project__element project__priority col-1 mr-5">
            <span class="priority text-white font-weight-bold p-1 rounded ${priority}">${priority}</span>
        </div>
        <div class="project__element project__setting col ml-2 d-flex">
            <button class="btn edit-btn focus--box-shadow d-flex align-items-center justify-content-center" type="button">
            <img src="img/edit.png" alt="">
            </button>
            <button class="btn delete-btn focus--box-shadow-delete d-flex align-items-center justify-content-center ml-2" type="button">
            <img src="img/trash.png"/>
            </button>
        </div>
        </div>
        </a>
        <div class="collapse" id="collapse${id}">
        <div class="card card-body">
          <span>Task Description: </span>
          ${description}
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
    addTask(name, description, assignedTo, dueDate, status, priority) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
            priority: priority
        };
        // Push the task to the tasks property
        this.tasks.push(task);  
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
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status, task.priority, task.id);

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
