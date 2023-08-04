var addTwoPromises = async function(promise1, promise2) {

    const [num1, num2] = await Promise.all([promise1, promise2]);
    console.log(num1+num2);
    return num1 +  num2;
};

var addTwoPromises2 = async function(promise1, promise2) {

    return promise1.then((val1) => {
        return promise2.then((val2) => {
            console.log(val1+val2);
            return val1+val2;
        })
    })
};

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2);
addTwoPromises2(promise1, promise2);
