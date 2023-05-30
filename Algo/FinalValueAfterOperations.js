var finalValueAfterOperations = function(operations) {
    let valueOfX = 0;
    for (let i = 0;i<operations.length;i++) {
        if(operations[i].includes('++')) {
            // console.log("increment: ",operations[i]);
            valueOfX++;
        } else {
            valueOfX--;
        }
    }
    return valueOfX;
};

var finalValueAfterOperations2 = function(operations) {
    
}

console.log(finalValueAfterOperations(["++X","++X","X++"]));
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));
