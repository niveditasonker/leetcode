var integerToRoman = function(num) {
    let roman = ['M', 'CM','D', 'CD','C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let values= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = '';

    for (let i=0; num>0; i++){ // don't use usualu <= N condition
        while (num >= values[i]) {
            result += roman[i];
            num -= values[i];
        }
    }

    return result;
}

var intToRoman2 = function (num) {
    const list = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    const valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';

    // Run until we have converted the full number
    while (num !== 0) {
        // Loop though the available numerals
        for (let i = 0; i < list.length; i++) {
            // Check if the outstanding number is greater than the current numeral
            if (num >= valueList[i]) {
                // If so, add this numeral to the result and subtract its value from the outstanding number
                result += list[i];
                num -= valueList[i];
                break;
            }
        }
    }
    return result;
};

console.log(integerToRoman(41));
console.log(integerToRoman(3));
console.log(integerToRoman(555));
console.log(integerToRoman(1994));