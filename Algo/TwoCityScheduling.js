var twoCitySchedCost = function(costs) {
    // sort as per A city is increasing from less expensive to most;
    let sortedCosts = costs.sort((a,b) => (a[0]-a[1]) - (b[0]-b[1]) );

    let minCost = 0;
    // first half is A cheap; 2nd half is B cheap;
    let halfway = sortedCosts.length/2;

    // for first half just add A costs;
    for (let i=0; i<halfway; i++){
        minCost += sortedCosts[i][0];
    }

    // for 2nd half just add B costs;
    for (let i=halfway; i<sortedCosts.length; i++){
        minCost += sortedCosts[i][1];
    }

    console.log(sortedCosts);

    return minCost;
};

let costs = [[10,20],[30,200],[400,50],[30,20]];
console.log(twoCitySchedCost(costs));
// costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]];
// console.log(twoCitySchedCost(costs));
// costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]];
// console.log(twoCitySchedCost(costs));