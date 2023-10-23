// Go with older style map, 2nd solution

var findDuplicate = function(paths) {
    let res = [];

    let map = new Map();

    for (const path of paths){
        let [root, ...files] = path.split(' ');

        for(const curr of files){
            const [fileName, content] = curr.split('(');

            if(map.has(content)){
                map.get(content).push(`${root}/${fileName}`);
            } else {
                map.set(content, [`${root}/${fileName}`]);
            }
        }
    }

    // console.log("Map:", map);

    for (let [entry,val] of map){
        if(val.length > 1){
            res.push(val);
        }
    }

    return res;
};

var findDuplicate2 = function(paths) {
    let map={},ans=[]
     for(path of paths){
        let [root,...files] = path.split(' ');
        for(file of files){
            let [fileName,content] = file.split('(');
            if(map[content]){
                map[content].push(`${root}/${fileName}`)
            }
            else{
                map[content] = [`${root}/${fileName}`]
            }
        }
    }
   
    for(entry in map){
        if(map[entry].length>1){
            ans.push(map[entry]);
        }
    }
    return ans
  

};

let paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"];

console.log(findDuplicate(paths));
// console.log(findDuplicate2(paths));