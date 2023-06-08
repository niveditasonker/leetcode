var findJudge = function(n, trust) {
    let count = new Array(n+1).fill(0); // since no person is labeled as 0

    for (let [a,b] of trust){
        console.log(a,b);
        count[a]--; //a will never be a judge
        count[b]++;
    }

    console.log(count);

    for (let i=1; i<n+1; i++){
        if (count[i] == (n-1)) return i;
    }

    return -1;

};

let n = 2, trust = [[1,2]];
console.log(findJudge(n, trust));

n = 3, trust = [[1,3],[2,3],[3,1]];
console.log(findJudge(n, trust));

n = 3, trust = [[1,3],[2,3]];
console.log(findJudge(n, trust));