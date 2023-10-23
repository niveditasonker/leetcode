var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");
    return arr[arr.length-1].length;
};

var lengthOfLastWord2 = function(s) {
    let trimmedString = s.trim();
    
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};

let s = "Hello World";
console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord2(s));

s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord2(s));

s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord2(s));