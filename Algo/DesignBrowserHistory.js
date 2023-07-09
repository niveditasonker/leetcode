/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.current = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.length = this.current + 1;
    this.current++;
    this.history.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.current = Math.max(0, this.current-steps);
    return this.history[this.current];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.current = Math.min(this.history.length - 1, (steps+this.current));
    return this.history[this.current];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

let Input=["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]];

console.log();

/**
 * @param {string} homepage
 */
var BrowserHistoryWithLL = function(homepage) {
    this.page = {
        url: homepage,
        back: null,
        next: null,
    };
};

BrowserHistoryWithLL.prototype.visit = function(url) {
    this.page.next = {
        url,
        back: this.page,
        next: null
    };
    this.page = this.page.next;
};

BrowserHistoryWithLL.prototype.back = function(steps) {
    while (this.page.back && steps) {
        this.page = this.page.back;
        steps--;
    }
    
    return this.page.url;
};

BrowserHistoryWithLL.prototype.forward = function(steps) {
    while (this.page.next && steps) {
        this.page = this.page.next;
        steps--;
    }
    
    return this.page.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */