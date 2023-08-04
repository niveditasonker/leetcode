/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function(functions, n) {
    let inProgress = 0;
    let idx = 0;

    return new Promise((resolve) => {
        const executePromises =() => {
            while (inProgress < n && idx < functions.length) {
                inProgress += 1;

                const currPromise = functions[idx]();
                idx += 1;

                currPromise.then(() => {
                    inProgress -= 1;
                    executePromises();
                });
            }

            if (inProgress == 0 && idx===functions.length) {
                resolve();
                return;
            }
        }
        executePromises();
    });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

// Roblox: task runner

functions = [
    () => new Promise(res => setTimeout(res, 300)),
    () => new Promise(res => setTimeout(res, 400)),
    () => new Promise(res => setTimeout(res, 200))
],
n = 2;

const ans = promisePool(functions, n);
console.log(ans);

var promisePool = async function(functions, n) {
    let i=0;
    // Execute current function and call next function
    const next = async () => {
        const fn = functions[i++]
        if(fn) {
            await fn();
            return next();
        }
    }

    // Execute n function at once
    return Promise.all(Array(n).fill().map(next));
};
/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */