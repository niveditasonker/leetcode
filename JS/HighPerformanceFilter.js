class HighPerformanceFilter {
    constructor() {
        this.streamMap = new Map();
        this.stream = [];
    }

    addTag(tag) {
        const index = this.stream.length;
        tag.split(",").forEach(s => {
            s = s.trim().toLowerCase();
            
            if (!this.streamMap.has(s)) {
                this.streamMap.set(s, new Set());
            }
            
            this.streamMap.get(s).add(index);
            // console.log(s, this.streamMap, index);
        });
        this.stream.push(tag);
    }

    searchTags(keywords) {
        console.log("StreamMap: ", this.streamMap);
        const counterMap = new Map();
        for (const keyword of keywords) {
            for (const count of this.streamMap.get(keyword) || new Set()) {
                // console.log("keyword: ", keyword, "word: ", count);
                const total = counterMap.get(count) || 0
                counterMap.set(count, total + 1);
            }
        }

        console.log(counterMap);
        const set = new Set();
        for (const key of counterMap.keys()) {
            if (counterMap.get(key) === keywords.length) {
                this.stream[key].split(", ").forEach(i => set.add(i));
            }
        }
        keywords.forEach(i => set.delete(i));
        return set;
    }
}

const h = new HighPerformanceFilter();
h.addTag("apple, facebook, google");
h.addTag("banana, facebook");
h.addTag("facebook, google, tesla");
h.addTag("intuit, google, facebook");

console.log(h.searchTags(["facebook", "google"])); // Output: Set(2) { 'apple', 'tesla', 'intuit' }
console.log(h.searchTags(["apple"]));
