/*
Q: The problem was framed as a Design Problem. There is a class called Air Strip, it has two methods:
addPath(String source, String destination)
printAllPathsBetween(String source, String destination)

Here's an example of how your method would be called:

addPath('A', 'B');
addPath('B', 'C');
addPath('B', 'C');
addPath('A', 'C');
addPath('A', 'D');
addPath('D', 'C');
addPath('F', 'E');

printAllPathsBetween('A', 'C') should return:
'A -> C'
'A -> B -> C'
'A -> D -> C'

*/

let AirStrip  = function(){
    this.path = new Map();
}

AirStrip.prototype.addPath = function(source, dest) {
    if (!this.path.has(source)){
        this.path.set(source, [dest]);
    } else {
        this.path.get(source).push(dest);
    }
}

AirStrip.prototype.printAllPathsBetween = function(source, dest){
    let allPaths = [];
    let path = '';
    let visited = {};
    console.log(this.path);

    const dfs = ((start, path) => {
        if (start === dest){
            path = path + start;
            allPaths.push(path);
            return;
        }
        console.log(allPaths);

        path += start;
        path += '->';
        // visited[start] = true;

        for (const p of this.path.get(start)){
            // if (!visited[p]) {
                dfs(p, path);
            // }
           
        }
    });
    dfs(source, '');

    return allPaths;
}

let airstrip = new AirStrip();
airstrip.addPath('A', 'B');
airstrip.addPath('B', 'C');
// airstrip.addPath('B', 'C');
airstrip.addPath('A', 'C');
airstrip.addPath('A', 'D');
airstrip.addPath('D', 'C');
airstrip.addPath('F', 'E');

console.log(airstrip.printAllPathsBetween('A', 'C'));