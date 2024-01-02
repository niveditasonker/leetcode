// promise is triggered to resolve here, when creating
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved');
    }, 1000);
});

// promise.then((res) => {
//     console.log('Res:', res);
// });


/*
    A new Promise will immediately execute. If we do not want execute immediately,
    we need to put it into a function and call it when desired.
*/
const getPromise = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('----> resolved');
        }, 100);
    });
}

// getPromise().then((res) => {
//     console.log('In res:', res);
// });

/*
After a Promise is created, it can be consumed. There are three main ways to consume a Promise: then(), catch(), finally().
*/

/*
    Promises have the following properties:

    constructor((resolve, reject) => {}) — takes a handler function with the params
    resolve and reject .

    .then(res => onFulfilled(res), err => onRejected(err)) — takes two params
    (onFulfilled, onRejected) which are functions Promise consumers calls to consume
    their promises after they are resolved or rejected

    Promise’s states — “pending”, “fulfilled”, “rejected”

    Promise’s value — the result or error called with functions onFulfilled and onRejected
    which are provided by the Promise’s consumer.
*/

console.log('********** Non Async Support ************');

class PromiseNoAsync {
    constructor(handler) {
        this.status = "pending";
        this.value = null;
      
        const resolve = value => {
            if (this.status === "pending") {
                this.status = "fulfilled";
                this.value = value;
            }
        };
        const reject = value => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
            }
        };
      
        try {
            handler(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
  
    then(onFulfilled, onRejected) {
        if (this.status === "fulfilled") {
            onFulfilled(this.value);
        } else if (this.status === "rejected") {
            onRejected(this.value);
        }
    }
}

// testing code
const p1NoAsync = new PromiseNoAsync((resolve, reject) => {
    resolve('resolved!');
});
const p2NoAsync = new PromiseNoAsync((resolve, reject) => {
    reject('rejected!')
})
p1NoAsync.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
p2NoAsync.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

// 'p1 resolved!'
// 'p2 rejected!'

console.log('********** Async Support ************');
class Promise2 {
    constructor(handler) {
        this.status = 'pending';
        this.value =  null;
        this.onFulfilledCbs = [];
        this.onRejectedCbs = [];
    

        const resolve = (val) => {
            if (this.status === 'pending'){
                this.status = 'fulfilled';
                this.value = val;
                this.onFulfilledCbs.forEach((fn) => fn(val));
            }
        }

        const reject = (val) => {
            if (this.status === 'pending'){
                this.status = 'reejcted';
                this.value = val;
                this.onRejectedCbs.forEach((fn) => fn(val));
            }
        }

        try {
            handler(resolve, reject)
        } catch(err){
            reject(err);
        }
    }

    then(onFulfilled, onRejected){
        if(this.status === 'pending'){
            this.onFulfilledCbs.push(onFulfilled);
            this.onRejectedCbs.push(onRejected);
        }
        
        if (this.status === 'fulfilled'){
            onFulfilled(this.value);
        }
        
        if (this.status === "rejected") {
            onRejected(this.value);
        }
    }
}

const p1 = new Promise2((resolve, reject) => {
    resolve('Hey I resolved!');
});
const p2 = new Promise2((resolve, reject) => {
    reject('Hey I rejected!')
})
p1.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
p2.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

const p3 = new Promise2((resolve, reject) => {
    setTimeout(() => resolve('I resolved!'), 1000);
});
p3.then((res) => {
    console.log(res);
},(err) => {
    console.log(err);
});


console.log('********** Chaining Support ************');

class PromiseChainingSupport {
    constructor(handler) {
        this.status = 'pending';
        this.value =  null;
        this.onFulfilledCbs = [];
        this.onRejectedCbs = [];
    

        const resolve = (val) => {
            if (this.status === 'pending'){
                this.status = 'fulfilled';
                this.value = val;
                this.onFulfilledCbs.forEach((fn) => fn(val));
            }
        }

        const reject = (val) => {
            if (this.status === 'pending'){
                this.status = 'reejcted';
                this.value = val;
                this.onRejectedCbs.forEach((fn) => fn(val));
            }
        }

        try {
            handler(resolve, reject)
        } catch(err){
            reject(err);
        }
    }

    then(onFulfilled, onRejected){
        return new Promise((resolve, reject) => {

            const successCaller = () => {
                if(!onFulfilled) resolve(this.value);

                try{
                    const fullFilledFromLast = onFulfilled(this.value);
                    resolve(fullFilledFromLast);
                } catch (err){
                    reject(err);
                }
            }

            const failedCaller = () => {
                if(!onRejected) reject(this.value);

                try{
                    const rejectedFromLast = onRejected(this.value);
                    reject(rejectedFromLast);
                } catch(err){
                    reject(err);
                }
            }


            if(this.status === 'pending'){
                this.onFulfilledCbs.push(successCaller);
                this.onRejectedCbs.push(failedCaller);
            }
            if (this.status === 'fulfilled'){
                successCaller();
            }

            if (this.status === "rejected") {
                failedCaller();
            }

        });
    }
}


const p = new PromiseChainingSupport((resolve, reject) => {
    setTimeout(() => resolve('resolved first one'), 1000);
});
p.then((res) => {
    console.log(res);
    return res + ' do some calculation';
}).then(res => {
    console.log(res);
});
'resolved first one'

/* ********** return value of onFulfilled/onRejected is a Promise? ************ */;

class PromiseChainingSupportReturnVal {
    constructor(handler) {
        this.status = 'pending';
        this.value =  null;
        this.onFulfilledCbs = [];
        this.onRejectedCbs = [];
    

        const resolve = (val) => {
            if (this.status === 'pending'){
                this.status = 'fulfilled';
                this.value = val;
                this.onFulfilledCbs.forEach((fn) => fn(val));
            }
        }

        const reject = (val) => {
            if (this.status === 'pending'){
                this.status = 'reejcted';
                this.value = val;
                this.onRejectedCbs.forEach((fn) => fn(val));
            }
        }

        try {
            handler(resolve, reject)
        } catch(err){
            reject(err);
        }
    }

    then(onFulfilled, onRejected){
        return new Promise((resolve, reject) => {
            if(this.status === 'pending'){
                this.onFulfilledCbs.push(() => {
                    try{
                        const fullFilledFromLast = onFulfilled(this.value);

                        if (fullFilledFromLast instanceof Promise){
                            fullFilledFromLast.then(resolve, reject);
                        } else {
                            resolve(fullFilledFromLast);
                        }
                    } catch (err){
                        reject(err);
                    }
                });

                this.onRejectedCbs.push(() => {
                    try{
                        const rejectedFromLast = onRejected(this.value);
                        if (rejectedFromLast instanceof Promise){
                            rejectedFromLast.then(resolve, reject);
                        } else {
                            reject(rejectedFromLast);
                        }
                        
                    } catch(err){
                        reject(err);
                    }
                });

                if (this.status === 'fulfilled'){
                    try{
                        const fullFilledFromLast = onFulfilled(this.value);
                        if (fullFilledFromLast instanceof Promise){
                            fullFilledFromLast.then(resolve, reject);
                        } else {
                            resolve(fullFilledFromLast);
                        }
                    } catch (err){
                        reject(err);
                    }
                }

                if (this.status === "rejected") {
                    try{
                        const rejectedFromLast = onRejected(this.value);
                        if (rejectedFromLast instanceof Promise){
                            rejectedFromLast.then(resolve, reject);
                        } else {
                            reject(rejectedFromLast);
                        }
                    } catch(err){
                        reject(err);
                    }
                }

            }
        });
    }
}

let promise1 = new PromiseChainingSupportReturnVal((resolve, reject) => {
    setTimeout(() => resolve('resolved first one'), 1000);
});
promise1.then((res) => {
    console.log(res);
    return new PromiseChainingSupportReturnVal(resolve => {
        setTimeout(() => resolve('resolved second one'), 1000);
    });
}).then(res => {
    console.log(res);
});

// https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a