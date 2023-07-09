var unhappyFriends = function(n, preferences, pairs) {
    let happyMap = new Map();

    for (let p of pairs){
        happyMap.set(p[0], p[1]);
        happyMap.set(p[1], p[0]);
    }

    let rankMap = new Map();

    for (let i=0; i<n; i++){
        rankMap.set(i, new Map());
        for (j=0; j<n-1; j++){
            rankMap.get(i).set(preferences[i][j], j);
        }
    }

    console.log(rankMap);
    console.log(happyMap);

    let unhappy = 0;

    for (let i=0; i< n; i++){
        const happyPair = happyMap.get(i);
        const preferedRank = rankMap.get(i).get(happyPair);
        console.log(`i: ${i}, happyPair ${happyPair}, preferedRank: ${preferedRank}`);

        if (preferedRank === 0) continue;

        for (let j=0; j< n-1; j++){
            const currFriend = preferences[i][j];
            let currFriendRequest = happyMap.get(currFriend);
            const friendPref = rankMap.get(currFriend).get(currFriendRequest);

            console.log(`j: ${j}, currFriend ${currFriend}, currFriendRequest: ${currFriendRequest}, friendPref: ${friendPref}`);

            if(rankMap.get(i).get(currFriend) < preferedRank && 
                rankMap.get(currFriend).get(i) < friendPref) {
                unhappy++;
                break;
            }
        }
    }


    // console.log(unhappy);
    return unhappy;
};

/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends2 = function(n, preferences, pairs) {
    let happyMap = new Map();

    for (let p of pairs){
        happyMap.set(p[0], p[1]);
        happyMap.set(p[1], p[0]);
    }

    let rankMap = new Map();

    for (let i=0; i<n; i++){
        rankMap.set(i, new Map());
        for (j=0; j<n-1; j++){
            rankMap.get(i).set(preferences[i][j], j);
        }
    }

    let unhappy = 0;

    for (let i=0; i<n; i++){
        let happyPair = happyMap.get(i);
        let preferedRank = rankMap.get(i).get(happyPair);

        if (preferedRank === 0) continue;

        for(let j=0; j<n-1; j++){
            let currFriend = preferences[i][j];
            let currFriendFromHappyMap = happyMap.get(currFriend);
            let friendWanted = rankMap.get(currFriend).get(currFriendFromHappyMap);

            if (rankMap.get(i).get(currFriend) < preferedRank && 
              rankMap.get(currFriend).get(i) < friendWanted) {
                  unhappy++;
                  break;
              }
        }
    }

    return unhappy;
};

let n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]];
console.log(unhappyFriends(n, preferences, pairs));
console.log(unhappyFriends2(n, preferences, pairs));