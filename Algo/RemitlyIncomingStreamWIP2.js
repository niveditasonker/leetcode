/*
function getValues(symbol, dataStream) {
    const values = [];
    let isCollecting = false;
    let currentValue = '';
  
    for (const char of dataStream) {
      if (char === symbol) {
        isCollecting = !isCollecting;
        console.log(char, isCollecting);

        if (currentValue) {
          values.push(parseInt(currentValue));
          currentValue = '';
          isCollecting = !isCollecting;
        }

    } else if (isCollecting) {
        currentValue += char;
      }
    }
  
    if (currentValue) {
      values.push(parseInt(currentValue));
    }
  
    return values;
}

// console.log(getValues("$", "abc $300 £400 $30 abvv cvc"));
// console.log(getValues("£", "abc $300 £400 £30 £200 £65 cvc"));

function getConsecutiveValues(symbol, dataStream) {
    const values = [];
    let isCollecting = false;
    let currentValue = '';
    let prevValue = '';
  
    for (const char of dataStream) {
        if (char === symbol) {
            if (isCollecting && prevValue !== symbol){
                currentValue += char;
            }else {
                isCollecting = !isCollecting;
                console.log(char, isCollecting);
        
                if (currentValue) {
                values.push(parseInt(currentValue));
                currentValue = '';
                isCollecting = !isCollecting;
                }
            }
        } else if (isCollecting) {
                currentValue += char;
        }

        prevValue = char;
    }

  
    if (currentValue) {
      values.push(parseInt(currentValue));
    }
  
    return values;
}

function getConsecutiveValues2(symbol, dataStream) {
    const values = [];
    let isCollecting = false;
    let currentValue = '';
    let previousChar = '';
  
    for (const char of dataStream) {
      if (char === symbol) {
        
        if (isCollecting) {
            isCollecting = !isCollecting;
          // Handle case where there are multiple symbols in a row, e.g. $$300
          if (previousChar !== symbol) {
            currentValue += char;
          }
        } else {
          isCollecting = !isCollecting;
          if (currentValue) {
            values.push(parseInt(currentValue));
            currentValue = '';
          }
        }
      } else {
        if (isCollecting) {
          currentValue += char;
        }
      }
  
      previousChar = char;
    }
  
    if (currentValue) {
      values.push(parseInt(currentValue));
    }
  
    return values;
}
  

// console.log(getConsecutiveValues("$", "abc $$300 £400 $30 $200$300 abvv cvc")); 
console.log(getConsecutiveValues2("$", "abc $$300 £400 $30 $200$300 abvv cvc")); 

function getValues2(symbol, data) {
    const values = [];
    const symbolLength = symbol.length;
  
    for (let i = 0; i < data.length; i++) {
      if (data.substring(i, i + symbolLength) === symbol) {
        let number = '';
        while (!isNaN(data[i + symbolLength])) {
          number += data[i + symbolLength];
          i++;
        }
        if (number !== '') {
          values.push(parseInt(number));
        }
      }
    }
  
    return values;
}

*/