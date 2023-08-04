class Cache {
    constructor(sets, ways) {
      this.sets = sets;
      this.ways = ways;
      this.cache = new Array(sets);
  
      for (let i = 0; i < sets; i++) {
        this.cache[i] = new Array(ways);
        for (let j = 0; j < ways; j++) {
          this.cache[i][j] = { tag: null, data: null };
        }
      }
    }
  
    read(address) {
      const setIndex = address % this.sets;
      const tag = Math.floor(address / this.sets);
  
      for (let i = 0; i < this.ways; i++) {
        if (this.cache[setIndex][i].tag === tag) {
          return this.cache[setIndex][i].data;
        }
      }
  
      return null; // Cache miss
    }
  
    write(address, data) {
      const setIndex = address % this.sets;
      const tag = Math.floor(address / this.sets);
  
      for (let i = 0; i < this.ways; i++) {
        if (this.cache[setIndex][i].tag === tag) {
          this.cache[setIndex][i].data = data;
          return;
        }
      }
  
      // Cache miss, replace a random way
      const randomWay = Math.floor(Math.random() * this.ways);
      this.cache[setIndex][randomWay] = { tag, data };
    }
  }
  