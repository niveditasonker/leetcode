/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let preReqCourses = new Array(numCourses).fill(0);
    let stack = [];
    let res = [];

    for (let [c1] of prerequisites){
        preReqCourses[c1]++
    }

    for (let i=0;i<preReqCourses.length; i++){
        if (preReqCourses[i] === 0){
            stack.push(i);
        }
    }

    while(stack.length) {
        const currCourse = stack.pop();
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

let numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]];
console.log(findOrder(numCourses, prerequisites));