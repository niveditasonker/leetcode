/**
 * @param {number} n
 * @return {string[]}
 */

/*
The time complexity of each recursive call is O(1),
as the only operations performed are string concatenation and assignment.
Therefore, the overall time complexity of the program is O(2^n).
*/
var generateParenthesis = function(n) {
    let res = []

    let iterate = (str, open, close) =>{
        if(open > n || close >n || close >open) return;
        if(str.length == n *2 && open ==close){
            res.push(str);
            return;
        }
        iterate(str +'(',open+1,close)
        iterate(str + ')', open, close+1)
    }

    iterate('',0,0)
    return res;
};

let n = 3;
console.log(generateParenthesis(n));

n = 4;
console.log(generateParenthesis(n));