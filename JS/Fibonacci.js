var fibGenerator = function*() {
    let n0 =0, n1 =1, nextNum;
    yield n0;
    yield n1;
    while(true){
        nextNum = n0 + n1;
        yield nextNum;
        n0 = n1;
        n1 = nextNum;
    }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);