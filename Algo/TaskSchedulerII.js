var taskSchedulerII = function(tasks, space) {
    let daysPassed = 0; // daysPassed means day passed
    let map = new Map(); // we use this map to store next date which can finish current task
    
    for(let i = 0; i < tasks.length; i++) {
      if (map.has(tasks[i])) {
        // Jump to the next date which can finish the current task
        daysPassed = Math.max(daysPassed, map.get(tasks[i]));
      }
      map.set(tasks[i], daysPassed + space + 1);
      daysPassed++;
    }
      return daysPassed;    
  };

let tasks = [1,2,1,2,3,1]; let space = 3;
console.log(taskSchedulerII(tasks, space));

tasks = [5,8,8,5], space = 2;
console.log(taskSchedulerII(tasks, space));