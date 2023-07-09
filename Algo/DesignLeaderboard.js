var Leaderboard = function() {
    this.score = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!this.score.has(playerId)) {
        this.score.set(playerId, score);
    } else {
        this.score.set(playerId, (this.score.get(playerId) + score));
    }
    // console.log("Adding new players: ", this.score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let sum = 0;
    let i = 0;
    const arr = Array.from(this.score.values()).sort((a, b) => b-a);
    for (let score of arr){
        // console.log(i, K, score);
        if (i >= K) break;
        sum += score;
        i++;
    }
    return sum;

};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    // console.log("Before deleting: ", this.score);
    this.score.delete(playerId);
    // console.log("After deleting: ", this.score);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!this.score.has(playerId)) {
        this.score.set(playerId, score);
    } else {
        this.score.set(playerId, (this.score.get(playerId) + score));
    }
    // console.log("Adding new players: ", this.score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let sum = 0;
    let i = 0;

    const arr = Array.from(this.score.values()).sort((a, b) => b-a);
    for (let score of arr){
        // console.log(i, K, score);
        if (i >= K) break;
        sum += score;
        i++;
    }
    return sum;

};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    // console.log("Before deleting: ", this.score);
    this.score.set(playerId, 0);
    // console.log("After deleting: ", this.score);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

// 2nd soluion from leetcode:
var Leaderboard = function() {
    this.map = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.map.has(playerId)) {
        const val = this.map.get(playerId);
        score = val + score;
    } 
    
    this.map.set(playerId, score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const arr = Array.from(this.map.values()).sort((a, b) => b - a);

    let sum = 0;
    let idx = 0;
    
    while (K--) {
        sum += arr[idx++];
    }
    
    return sum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.map.delete(playerId);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */