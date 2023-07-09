/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function(sea, topRight, bottomLeft) {
    let numShips = 0;
    let stack = [[topRight, bottomLeft]];

    while (stack.length > 0){
        const [tR, bL] = stack.pop();

        if (!sea.hasShips(tR, bL)) continue;

        const [right, top] = tR;
        const [left, bottom] = bL;

        if (right == left && bottom == top) {
            numShips++;
            continue;
        }

        const xCoord = Math.floor((right+left)/2);
        const yCoord = Math.floor((top+bottom)/2);
        stack.push([tR, [xCoord+1, yCoord+1]]); //top right;
        stack.push([[xCoord, top], [left, yCoord+1]]); // top left;
        stack.push([[xCoord, yCoord], bL]); //bottom left;
        stack.push([[right, yCoord], [xCoord+1, bottom]]); //bottom right;
    }

    return numShips;
};

/*
stack.push([tR, [xCoord + 1, yCoord + 1]]); // top right

This line pushes a new rectangular area onto the stack representing the top-right quadrant of the current rectangular area. The tR coordinates remain the same, while the xCoord + 1 and yCoord + 1 coordinates define the new bottom-left coordinates of the top-right quadrant.
stack.push([[xCoord, top],[left, yCoord + 1]]); // top left

This line pushes a new rectangular area onto the stack representing the top-left quadrant of the current rectangular area. The xCoord and top coordinates define the new top-right coordinates of the top-left quadrant, while the left and yCoord + 1 coordinates define the new bottom-left coordinates.
stack.push([[xCoord, yCoord], bL]); // bottom left

This line pushes a new rectangular area onto the stack representing the bottom-left quadrant of the current rectangular area. The xCoord and yCoord coordinates define the new top-right coordinates of the bottom-left quadrant, while the bL coordinates remain the same.
stack.push([[right, yCoord], [xCoord + 1, bottom]]); // bottom right

This line pushes a new rectangular area onto the stack representing the bottom-right quadrant of the current rectangular area. The right and yCoord coordinates define the new top-right coordinates of the bottom-right quadrant, while the xCoord + 1 and bottom coordinates define the new bottom-left coordinates.

*/