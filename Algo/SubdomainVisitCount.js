var subdomainVisits = function(cpdomains) {
    let map = {};
    let res = [];

    for (let cp of cpdomains) {
        const [visits, domains] = cp.split(' ');

        let subDomains = domains.split('.');

        while (subDomains.length) {
            const curr = subDomains.join('.');

            if (map[curr]) {
                map[curr] += Number(visits);
            } else {
                map[curr] = Number(visits);
            }

            subDomains.shift();
        }
        // console.log(map);
    }

    for(let key in map){
        res.push(`${map[key]} ${key}`); 
     }

    return res;

    // return Object.keys(map).map((key) => `${map[key]} ${key}`);
    // return Object.entries(map).map(entry => `${entry[1]} ${entry[0]}`);
};


// Complexity: time O(n)
let cpdomains = ["9001 discuss.leetcode.com"];
console.log(subdomainVisits(cpdomains));

cpdomains =
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains));