function validateNumberString(str) {
    // your code here
    if (str !== 0 && !str) {
      return false;
    }
  
    return Number(str).toString() !== "NaN";
}

function validateNumberString(str) {
    return str !=="" && !isNaN(str)
}