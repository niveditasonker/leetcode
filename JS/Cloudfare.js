/*
count(1, 10);
 
// 1
// 100ms delay
// 2
// 100ms delay
// ...
// 10
*/

function createPromsie(i){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${i} printing after ${i*500} ms`);
            resolve(i+1);
        }, 500);
    }).then(async (next) => {
        if(next <10) {
             await createPromsie(next);
        }
    });
}

function printCount(start, end){
    for(let i=start; i<=end; i++){
        timer = setTimeout(() => {
            console.log(`${i} print counter after ${i*100} ms`);
        }, i*100);

        // const func = debounce(() => console.log(i), i*500);
        // func();
    }
}

async function counter(){
    let i=0;
    const res = await createPromsie(i);

}

let timer;
function debounce(cb, delay){
    return(...args) => {
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

printCount(1,10);
counter();