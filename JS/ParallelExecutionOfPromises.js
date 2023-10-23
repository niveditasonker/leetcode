/**
 * @param {Array<Function>} functions
 * @return {Promise}
 */
var promiseAllSettled = function(functions) {
    return new Promise((resolve, reject) => {
        let count = 0;
        const res = Array(functions.length);

        functions.forEach((fn, idx) => {
            fn().then((result) => {
                res[idx] = {"status": "fulfilled", "value": result};
                if(++count === res.length){
                    resolve(res);
                }
            },
            (error) => {
                res[idx] = {"status": "rejected", "reason": error};
                if(++count === res.length){
                    resolve(res);
                }
            });
        });   
    });
};


/**
 * const functions = [
 *    () => new Promise(resolve => setTimeout(() => resolve(15), 100))
 * ]
 * const time = performance.now()
 *
 * const promise = promiseAllSettled(functions);
 *              
 * promise.then(res => {
 *     const out = {t: Math.floor(performance.now() - time), values: res}
 *     console.log(out) // {"t":100,"values":[{"status":"fulfilled","value":15}]}
 * })
 */