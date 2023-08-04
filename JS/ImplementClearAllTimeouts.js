let originalTimeout = window.setTimeout;
let timeoutArr = [];

window.setTimeout = (cb, delay) => {
    const timerId = originalTimeout(cb, delay);
    timeoutArr.push(timerId);
    return timerId;
}

function clearAllTimeout() {
    // your code here
    for (let t of timeoutArr){
        window.clearTimeout(t);
    }
}

/*
Keep original set timeout in some variable (like you would do for some algo
problems with 'temp' variable

keep all newly created timeout ids in array

Overwrite window.setTimeout with function which accepts callback and delay
but then pushes timeout ids to our timeouts array, needs to return newly
created timeoutId to preserve the original setTimeout API

Function clearAllTimeouts loops through timeouts array clearing them
*/

//since the timeout id is incremental, just get the largest one by making one setTimeout call and down level to clear all.

/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  // your code here
  let id = setTimeout(null, 0);
  while(id>=0){
    window.clearTimeout(id);
    id--;
  }
}