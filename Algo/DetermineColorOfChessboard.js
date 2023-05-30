/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let xAxis = {
        'a':false,
        'b':true,
        'c':false,
        'd':true,
        'e':false,
        'f':true,
        'g':false,
        'h':true,
    }

    console.log(coordinates.charCodeAt(0));
    let newCoordinate = coordinates.split('');
    let total = newCoordinate[1]-1;

    if((newCoordinate[1]-1) % 2 ==0) return xAxis[newCoordinate[0]]
    else !xAxis[newCoordinate[0]];
};

var squareIsWhite2 = function(coordinates){
    let value  = !((coordinates.charCodeAt(0) - 97) % 2 == 0);
    console.log(`value: ${value}`);
    // if((coordinates.charCodeAt(1)-1) % 2 ==0) return value;
    // else !value;

    return ((coordinates.charCodeAt(1)-1) % 2 ==0) ? value : !value;
}

console.log(squareIsWhite('h3'));
console.log(squareIsWhite('c7'));

console.log(squareIsWhite2('h3'));
console.log(squareIsWhite2('c7'));