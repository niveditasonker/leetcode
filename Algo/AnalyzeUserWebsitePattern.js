// Below is O(n^3 logn)

var mostVisitedPattern = function(username, timestamp, website) {
    const tuples = createTuples(username, timestamp, website)
    console.log(tuples);

    const seqMap = new Map();

    for (const [uname, visited] of tuples){
        const tmp = createSequence(visited);

        for (const seq of tmp){
            const count = seqMap.get(seq) || 0;
            seqMap.set(seq, count+1);
        }
    }

    console.log("seqMap", seqMap);
    let maxUserCount = 0;
    let res ='';

    for (const [seq, count] of seqMap) {
        // console.log("In seqMap", seq, count);
        if (count > maxUserCount){
            maxUserCount = count;
            res = seq;
        } else if(count == maxUserCount) {
            if (seq < res){
                res = seq;
            }
        }
    }

    // console.log(res);

    return res.split("#");
};

function createSequence(sites){
    let n = sites.length;
    sites.sort((a,b) => a[1]-b[1]);

    const set = new Set();

    for (let i=0;i<n-2;i++){
        const site1 = sites[i][0];

        for (let j=i+1; j<n-1; j++){
            const site2 = sites[j][0];

            for (let k=j+1; k<n; k++){
                const site3 = sites[k][0];

                const currSeq = site1 + '#' + site2 + '#' + site3;
                set.add(currSeq);
            }
        }
    }

    console.log("Created Set: ", set);
    return set;
}

function createTuples(username, timestamp, website){
    const res = new Map()

    for (let i=0; i<username.length; i++){
        if (!(res.has(username[i]))){
            res.set(username[i], []);
        }
        res.get(username[i]).push([website[i], timestamp[i]]);
        // res[i] = [username[i], website[i], timestamp[i]];
    }

    return res;
}

let  username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"];
let timestamp = [1,2,3,4,5,6,7,8,9,10];
let website = ["home","about","career","home","cart","maps","home","home","about","career"]

console.log(mostVisitedPattern(username, timestamp, website));

// Below is O(n^2 logn)
var mostVisitedPattern2 = function(username, timestamp, website) {
    const list = username.map((u,i)=>[u, timestamp[i], website[i]]).sort((a,b)=>a[1]-b[1]);

    const record = new Map();

    list.forEach(([name, _, website], i) => {
        if(!record.has(name)){
            record.set(name, []);
        }
        
        record.get(name).push(website);
    });
    
    const counter = new Map();

    for(const [name, recs] of record) {
        const len = recs.length;

        const set = new Set();

        for(let i=0; i<len; ++i)
            for(let j=i+1; j<len; ++j)
                for(let k=j+1; k<len; ++k) {
                    const pat = [recs[i], recs[j], recs[k]].join('_');
                    set.add(pat);
                }

                set.forEach(pat=>counter.set(pat, (counter.get(pat) ?? 0 )+1))
    }
    
    let mx = 0;
    let pats = [];
    for(const [pat, cnt] of counter) {
        if(cnt===mx) pats.push(pat);
        else if(cnt>mx) {
            pats = [pat];
            mx = cnt;
        }
    }
    
    return pats.sort().at(0).split('_');
};

console.log(mostVisitedPattern(username, timestamp, website));

// https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/1168805/javascript-solution-maps-and-sets/