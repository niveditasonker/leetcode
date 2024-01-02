/*
Given an incoming stream of characters containing values like $300 and £400, write a function that takes symbol and data stream and returns array of values.

Example getValues("$", "abc $300 £400 $30 abvv cvc") returns [300, 30]
getValues("£", "abc $300 £400 $30 abvv cvc") returns [400]

Follow up : How will you handle tokens like $$300 and $200$300. Incoming data is a stream and you have no ability to peek next value.
*/

function getValues(currencySymbol, stream) {
    let values = [];
    let currentValue = "";
    let prevVal = "";
    let isProcessing = false;
  
    for (let i = 0; i < stream.length; i++) {
      if (stream[i] === currencySymbol) {
        // console.log(`sym scene: stream[i] ${stream[i]}, currentValue: ${currentValue}`);
        if (isProcessing && prevVal !== currencySymbol) {
          values.push(Number(currentValue));
          currentValue = "";
        }
        // console.log(values);
        isProcessing = true;
      } else if (isProcessing && !isNaN(Number(stream[i]))) {
        // console.log(`number scene: stream[i] ${stream[i]}, currentValue: ${currentValue}`);
        currentValue += stream[i];
      } else {
        // console.log(`other char scene: stream[i] ${stream[i]}, currentValue: ${currentValue}`);
        if (isProcessing) {
          values.push(Number(currentValue));
          currentValue = "";
          isProcessing = false;
        }
        // console.log(values);
      }
      prevVal = stream[i];
    }
  
    return values;
}

// Test cases
console.log('getValues', getValues("$", "abc $300 £400 $30 abvv cvc")); // Output: [300, 30]
console.log('getValues', getValues("£", "abc $300 £400 $30 abvv cvc")); // Output: [400]

// Test cases
console.log(getValues("$", "abc $300 £400 $30 abvv cvc")); // Output: [300, 30]
console.log(getValues("£", "abc $300 £400 $30 abvv cvc")); // Output: [400]
console.log(getValues("$", "abc $$300 £400 $30 abvv cvc")); // Output: [300, 30]
console.log(getValues("$", "abc $200$300 £400 $30 abvv cvc")); // Output: [300]
  
  
  // Test cases
//   console.log(getValues2("$", "abc $300 £400 $30 abvv cvc")); // Output: [300, 30]
//   console.log(getValues2("£", "abc $300 £400 $30 abvv cvc")); // Output: [400]
  
