// describe/it codes here

// module exports
const TaskManager = require('../js/taskManager.js');
const assert = require('assert');

// create a test suite
describe("when initializing a new TaskManager", () => {
    it("should create an empty tasks array", () => {
        const taskManager = new TaskManager(1);

        assert.deepStrictEqual(taskManager.tasks, []);   
    })

    it('should add a task', () => {
        // setup
        const taskManager = new TaskManager(0)
        let len = taskManager.tasks.length;
        // exercise
        taskManager.addTask("name", "description", "assignedTo", "dueDate", "status");
        // verify
        assert.ok(len < taskManager.tasks.length);
    })

    it("should delete a task", () => {
        const taskManager = new TaskManager(0);
        taskManager.addTask("name", "description", "assignedTo", "dueDate", "status");
        let len = taskManager.tasks.length;
       
        taskManager.deleteTask(0)
        assert.ok(len > taskManager.tasks.length);

    })    

    it("selects the right id for first task added", () =>  {
        const taskManager = new TaskManager(0);
        taskManager.addTask("test", "description", "assignedTo", "dueDate", "status");
        let name = "test";
        let id = 0;
        let result = taskManager.getTaskById(id);
        assert.ok(name === result.name);
    })
    
    it("selects the right id a randomly selected task", () => {
    const taskManager = new TaskManager(0);

    for (let i=0; i<6; i++)
    {
        taskManager.addTask("name" + i, "description", "assignedTo", "dueDate", "status");
    }
    
    let random = Math.round(Math.random() * 6);
    let randomId = random;
    let result = taskManager.getTaskById(random);

    assert.ok("name" + randomId === result.name);
    })
});