function throttle(cb, delay) {
    let timer = null;
    let shouldWait = false;
    if (!shouldWait) {
        cb();
        shouldWait = true;
    }

    return(...args) =>{
        clearTimeout(timer);
        cb(...args);
        shouldWait = true;
        timer = setTimeout(() =>{
            shouldWait = false;
            timer = null;
        }, delay);
    }

}

function throttle2(cb, delay) {
    let wait = false;
    let storedArgs = null;
  
    function checkStoredArgs () {
      if (storedArgs == null) {
        wait = false;
      } else {
        cb(...storedArgs);
        storedArgs = null;
        setTimeout(checkStoredArgs, delay);
      }
    }
  
    return (...args) => {
      if (wait) {
        storedArgs = args;
        return;
      }
  
      cb(...args);
      wait = true;
      setTimeout(checkStoredArgs, delay);
    }
  }