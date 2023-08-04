function clamp(value, lower, upper) {
    // throw 'Not implemented';
    value = Math.max(lower, value);
    value = Math.min(value, upper);
    return value;
}

console.log(clamp(3, 0, 5)); // => 3
console.log(clamp(-10, -3, 5)); // => -3
console.log(clamp(10, -5, 5)); // => 5