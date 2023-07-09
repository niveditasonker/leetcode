/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let preReqCourses = new Array(numCourses).fill(0);
    let stack = [];
    let res = [];

    console.log(preReqCourses);
    for (let [c1] of prerequisites){
        console.log(c1);
        preReqCourses[c1]++
    }
    console.log(preReqCourses);

    for (let i=0;i<preReqCourses.length; i++){
        if (preReqCourses[i] === 0){
            stack.push(i);
        }
    }
    
    console.log(stack);

    while(stack.length) {
        const currCourse = stack.pop();
        console.log(`currCourse: ${currCourse}`);
        numCourses--;
        res.push(currCourse);

        for (let [c1, c2] of prerequisites) {
            if(currCourse == c2){
                preReqCourses[c1]--;

                if (preReqCourses[c1] === 0){
                    stack.push(c1);
                }
            }
        }
    }

    return numCourses === 0 ? res:[];
};

let numCourses = 2, prerequisites = [[1,0]];
console.log(findOrder(numCourses, prerequisites));
// numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]];
// console.log(findOrder(numCourses, prerequisites));