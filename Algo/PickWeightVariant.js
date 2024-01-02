/*
Question: You are given a task to build a data structure behind a set of functions
to add tasks each with a weight associated with it and a function to pick a task. 
Write a class to manage these set of tasks with the following features:

ability to manage tasks to be added from this over time add(Task a, int weight)
function pickTask() to choose a task based on the weight associated with it
For example, let’s say we have two tasks Task-A with weight 6 and Task-B with
weight 4. If I call the pickTask() function 100 times I should get on average Task-A served 60 times and Task-B served 40 times.
*/

class TaskManagement {
    constructor() {
        this.sum = [];
        this.tasks = [];
    }

    addTask(task, weight) {
        this.tasks.push(task);
        if (this.sum.length === 0) {
            this.sum.push(weight);
        } else {
            const totalSum = this.sum[this.sum.length - 1];
            this.sum.push(totalSum + weight);
        }
    }

    pickTask() {
        if (this.sum.length === 0) {
            throw new Error("No tasks available!");
        }
        const totalSum = this.sum[this.sum.length - 1];
        const sumToCheck = Math.random() * totalSum;
        let index = this.sum.findIndex((value) => value >= sumToCheck);
        if (index < 0) {
            index = Math.abs(index) - 1;
        }
        return this.tasks[index];
    }
}

// Example usage:
const taskManager = new TaskManagement();
taskManager.addTask("Task A", 3);
taskManager.addTask("Task A", 3);
taskManager.addTask("Task A", 3);
taskManager.addTask("Task B", 5);
taskManager.addTask("Task C", 2);

console.log(taskManager.pickTask()); // Output: Randomly picked task
