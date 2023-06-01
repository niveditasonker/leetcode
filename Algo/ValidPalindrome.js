var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let i = 0; j = str.length-1;

    while(i<j) {
        if (str[i++] !== str[j--]) return false;
    }
    return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));