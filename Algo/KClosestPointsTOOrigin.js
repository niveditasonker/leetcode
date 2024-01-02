/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    p = points.sort((a, b) => (a[0]*a[0]+a[1]*a[1]) - (b[0]*b[0]+b[1]*b[1]))
    res = []
    for (let i = 0; i < k; i++) {
        res.push(p[i])  
    }
    return res    
};