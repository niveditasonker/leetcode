function solve(dict, target) {
    const counter = new Map();
    for (let i = 0; i < target.length; i++) {
      counter.set(target[i], (counter.get(target[i]) || 0) + 1);
    }
    let res = "";
    for (let w of dict) {
      const wCounter = new Map();
      for (let i = 0; i < w.length; i++) {
        wCounter.set(w[i], (wCounter.get(w[i]) || 0) + 1);
      }
      let isSubset = true;
      for (let [key, value] of counter) {
        if (wCounter.get(key) !== value) {
          isSubset = false;
          break;
        }
      }
      if (isSubset && w.length > res.length) {
        res = w;
      }
    }
    return res;

}

console.log(solve(['when', 'what', 'whatthen', 'whatnow'], "whatno"))
// console.log(solve(['when', 'what', 'whatthen', 'whatnow'], "whatnwo"))
// console.log(solve(['when', 'what', 'whatthen', 'whatnow'], "wontthaw"))