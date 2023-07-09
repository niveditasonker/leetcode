var assert = require('assert');

function throttle(func, waitTime) {
  // fiill in this method
  let shouldWait = false;

  return (...args) => {
    func(...args);
    shouldWait = true;

    setTimeout(() => {
        shouldWait = false;
    }, waitTime);
  }
}

let time = 0;

function testThrottle(input) {
  const calls = [];
  time = 0;

  function wrapper(arg) {
    calls.push(`${arg}@${time}`);
  }

  const throttledFunc = throttle(wrapper, 3);
  input.forEach((call) => {
    const [arg, time] = call.split("@");
    setTimeout(() => throttledFunc(arg), time);
  });
  return calls;
}

expect(testThrottle(["A@0", "B@2", "C@3"])).toEqual(["A@0", "C@3"]);