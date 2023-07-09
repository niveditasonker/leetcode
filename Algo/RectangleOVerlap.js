/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [ax1, ay1, ax2, ay2] =rec1;
    let [bx1, by1, bx2, by2] =rec2;

    const left = Math.max(ax1, bx1);
    const right = Math.min(ax2, bx2);

    const bottom = Math.max(ay1, by1);
    const top = Math.min(ay2, by2);

    if (left < right && bottom < top) return true;

    return false;
};

let rec1 = [0,0,2,2], rec2 = [1,1,3,3];
console.log(isRectangleOverlap(rec1, rec2));

rec1 = [0,0,1,1], rec2 = [1,0,2,1];
console.log(isRectangleOverlap(rec1, rec2));

rec1 = [0,0,1,1], rec2 = [2,2,3,3];
console.log(isRectangleOverlap(rec1, rec2));