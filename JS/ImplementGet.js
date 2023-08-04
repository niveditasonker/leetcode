function get(source, path, defaultVal=undefined){
    const parts = Array.isArray(path) ? path :
        path.replaceAll('[', '.')
        .replaceAll(']', '')
        .split('.');

    if (parts.length === 0){
        return defaultVal;
    }

    for (let p of parts){
        if (source[p] === undefined){
            return defaultVal;
        }

        source = source[p];
    }

    return source;
}
const john = {
    profile: {
      name: { firstName: 'John', lastName: 'Doe' },
      age: 20,
      gender: 'Male',
    },
};
  
const jane = {
    profile: {
      age: 19,
      gender: 'Female',
    },
};
const obj = {
    a: {
      b: {
        c: [1,2,3]
      }
    }
}

console.log(get(obj, 'a.b.c')); // [1,2,3]
console.log(get(obj, 'a.b.c.0')); // 1
console.log(get(obj, 'a.b.c[1]')); // 2
console.log(get(obj, ['a', 'b', 'c', '2'])); // 3
console.log(get(obj, 'a.b.c[3]')); // undefined
console.log(get(obj, 'a.c', 'bfe')); // 'bfe'
console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(john, 'profile.gender')); // 'Male'
console.log(get(jane, 'profile.name.firstName'));