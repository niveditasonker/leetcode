var countAndSay = function(n) {
    let seq = '1';

    while(n>1){
        let count = 0;
        let curr = '';

        for (let i=0; i <= seq.length; i++){
            if(i===seq.length || (i>0 && seq[i] !== seq[i-1])){
                curr += count + seq[i-1];
                count = 0;
            }
            count++;
        }
        
        seq = curr;
        n--;
    }

    return seq;
};

console.log(countAndSay(4));

function getNthNum(n) {
    let str = "1";
    n -= 1;
    while (n > 0) {
      let strNum = "";
      for (let i = 0; i < str.length; i++) {
        let count = 1;
        while (str[i] === str[i+1] && i < str.length) {
          count += 1;
          i++;
        }
        strNum += count + str[i];
      }
      str = strNum;
    }
    return str;
  }

  console.log(countAndSay(4));

// Optimized version O(M)
function countAndSayOptimized(n) {
    if (n === 1) return "1";
  
    let str = "1";
    for (let i = 2; i <= n; i++) {
      let strNum = "";
      let count = 1;
      for (let j = 0; j < str.length; j++) {
        if (str[j] === str[j + 1]) {
          count++;
        } else {
          strNum += count + str[j];
          count = 1;
        }
      }
      str = strNum;
    }
    return str;
}
console.log(countAndSayOptimized(4));