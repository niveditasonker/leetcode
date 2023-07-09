const string = 'abcdefghghghghghgh.';
const substring = 'ghg';

function numOfOccurences(string, substring) {
    let count = 0;
    let start = 0;
    
    if (string.length > 0 && string.length < 201) {
      for (let i = 0; i < string.length; i++) {
        i = string.indexOf(substring, start);
        // console.log(i);
        if (i > -1) {
          start = i + 1;
          count++;
        } else {
          break;
        }
      }
    }
    return count;
}



console.log(numOfOccurences(string, substring));