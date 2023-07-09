// Javascript

// Implement a task runner that executes an array of tasks. When the runner is passed a number, it only executes that number of tasks concurrently and it passes the other ones into a queue to be executed later. We want to execute all tasks as quickly as possible given the concurrent task limits and in the order they are enqued. Feel free to edit the interface as you see fit.
 
const task1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 1 Complete");
        resolve();
      }, 300);
    });
  }
   
  const task2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 2 Complete");
        resolve();
      }, 300);
    });
  }
   
  const task3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 3 Complete");
        resolve();
      }, 400);
    });
  }
   
  const task4 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 4 Complete");
        resolve();
      }, 200);
    });
  }
   
  const runner = new Runner(2);
  runner.push(task1);
  runner.push(task2);
  runner.push(task3);
  runner.push(task4);
   
   const Runner = (numOfTasks) => {
      this.tasksCount = numOfTasks;
      this.queue = [];
      this.currentlyRunningTasks = 0;
   }
   
  Runner.prototype.push = (task) => {
      this.queue.push(task);
      this.enqueueTasks(task);
  }
  Runner.prototype.taskHasFinsishedRunNextTaskIfPossible = () => {
      this.currentlyRunningTasks -= 1;
      this.enqueueTasks();
      // Check there is a next task in the queue
      // Tell runner we are adding another task in flight
      // Do any bookkeeping we need to
  }
  
  Runner.prototype.enqueueTasks = () => {
      if (this.taskCount > 0 && this.currentlyRunningTasks < this.taskCount) {
          while(this.queue.length){
              const currTask = this.queue.shift();
              this.currentlyRunningTasks += 1;
              execute(currTask).then(this.taskHasFinsishedRunNextTaskIfPossible.bind(this));
          }
      }
      
      
      
          // while this.taskCount
          
  
  
          // execute(currTask).then(() => {
          //     if (this.tasksCount > 1) {
          //         execute(this.queue.shift())
          //     }
          // });
  }
  
  function execute(taskToBeExecuted) {
  
  }
  // Task 1 will take 300ms to complete
  // Task 2 will take 300ms to complete
  // Task 3 will take 300ms to complete
  // Task 4 will take 200ms to complete
  
  
   
   
  // 0 ms
  // ~~300 ms: Task 1 completed. Task 3 begins
  // ~~300 ms: Task 2 completed. Task 4 begins
  // ~~500 ms: Task 4 completed
  // ~~600 ms: Task 3 completed
  
  console.log('Hello world');
  