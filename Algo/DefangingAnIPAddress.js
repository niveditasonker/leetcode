var defangIPaddr = function(address) {
    // newAdd.replace('/\./g', '/\[\.\]/g');
    const newStr = address.split('.').join('[.]');
    console.log(newStr);
    return address;
}

var defangIPaddr2 = function(address) {
    let desiredString = address
    .split('.')
    .reduce((fullPath, arg) => fullPath + `[.]${arg}`);
    // desiredString.reduce(joiner);
  return desiredString;
};

function joiner(fullPath, arg) {
    console.log(fullPath, arg);
    console.log("Returned value: ", fullPath + `[.]${arg}`);
    return fullPath + `[.]${arg}`;
}

console.log(defangIPaddr("129.130.91.65"));
console.log(defangIPaddr2("129.130.91.65"));