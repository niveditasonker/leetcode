var validWordAbbreviation = function(word, abbr) {
    let i=0;
    let j=0;
    let number =0;

    // check for loop boundaries
    while(i<=abbr.length && j <= word.length){
        // if the abbr char is a number
        if(!isNaN(abbr[i])){
            // add the number to the previous number times 10
			// for example "12" will be 1 first then 10 + 2
            number = number * 10 + Number(abbr[i]);
            // if the new number is zero return false for leading zeros
            if(number === 0) return false;
            // increment the abbv pointer
            i++;
        // if the number is greater than zero
        } else if(number>0) {
            // increment j pointer
            j += number;
            // reset number
            number = 0;
        // if the characters match
        } else if (abbr[i] === word[j]){
            i++;
            j++;
        } else {
            return false
        }
    }

    return i===abbr.length && j+number===word.length;
};

let word = "internationalization", abbr = "i12iz4n";
console.log(validWordAbbreviation(word, abbr));


word = "a0", abbr = "a";
console.log(validWordAbbreviation(word, abbr));