function isAlpha(c) {
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
}
  
function swap(arr, a, b) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}
  
function reverseOnlyAlphabetical(str) {
    const result = str.split("");
    let left = 0;
    let right = result.length - 1;
  
    while (left < right) {
      if (!isAlpha(result[left].charCodeAt())) {
        left++;
      } else if (!isAlpha(result[right].charCodeAt())) {
        right--;
      } else {
        swap(result, left++, right--);
      }
    }
  
    return result.join("");
}

/*

var reverseOnlyLetters = function(s) {
    let sArr = s.split('');
    let aplhaArr = [];

    for (let char of sArr) {
        if (/[a-zA-Z]/.test(char)) {
            aplhaArr.push(char)
        }
    }
      
    const reversedAlpha = reverseArray(aplhaArr);

    function reverseArray(){
        let left = 0, right = aplhaArr.length-1;
        while(left <= right){
            let tmp = aplhaArr[left];
            aplhaArr[left] = aplhaArr[right];
            aplhaArr[right] = tmp;
            left++, right--;
        }
        return aplhaArr;
    }

    console.log(reversedAlpha);

    for (let i = 0; i < sArr.length; i++) {
        if (/[a-zA-Z]/.test(sArr[i])) {
            sArr[i] = reversedAlpha[i];
        } else {
            console.log("====> ", sArr[i]);
            sArr[i] = sArr[i];
        }
    }
    return sArr;
};

*/

let s = "ab-cd";
// console.log(reverseOnlyLetters(s));
console.log(reverseOnlyAlphabetical(s));