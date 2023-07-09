var groupThePeople = function(groupSizes) {
    let map = new Map();
    let output = [];

    for (let i=0; i< groupSizes.length; i++){
        const currgroup = groupSizes[i];
        let temp = [];

        if (map.has(currgroup)){
            temp = map.get(currgroup);
            // map.set(currgroup, [...map.get(currgroup), i]);
        }
        // else {
        //     map.set(currgroup, [i]); 
        // }

        temp.push(i);
        map.set(currgroup, temp);

        if (temp.length === currgroup){
            output.push(temp);
            map.delete(currgroup);
        }

        // if (map.get(currgroup).length === currgroup){
        //     output =[...output, map.get(currgroup)];
        //     map.delete(currgroup);
        // }
    }
    return output;
};


let groupSizes = [3,3,3,3,3,1,3];
console.log(groupThePeople(groupSizes));

var groupThePeople2 = function(group) {
    const result = []
    const hash = {}
        
    for (let i = 0; i < group.length; i++) {
        const num = group[i]
        
        if (hash[num]) {
        hash[num].push(i)
        } else {
        hash[num] = [i]
        }
        
        if (hash[num].length === num) {
        result.push(hash[num])
        delete hash[num]
        }
    }
    return result
};

groupSizes = [3,3,3,3,3,1,3];
console.log(groupThePeople2(groupSizes));  