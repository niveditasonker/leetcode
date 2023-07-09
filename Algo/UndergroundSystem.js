var UndergroundSystem = function() {
    this.customer = {};
    this.avg = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if (!this.customer.id){
        this.customer[id] = [stationName, t];
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [stn, stm]  = this.customer[id];
    const key = [stn, stationName].join();

    if (this.avg.has(key)){
        let [avg, count] = this.avg.get(key);
        const averageTime = [avg * (count/++count) + ((t - stm)/count), count]
        this.avg.set(key, averageTime);        
    } else {
        this.avg.set(key, [(t-stm), 1]);
    }
    delete this.customer[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    console.log(this.avg.get([startStation, endStation]));
    return this.avg.get([startStation, endStation].join())[0];
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */


class UndergroundSystem {
    customer = new Map();
    avg = new Map();
    
    checkIn(id, stationName, t) {
      this.customer.set(id, { stationName, t });
    }
    checkOut(id, stationName, t) {
      const checkIn = this.customer.get(id);
      if (!checkIn) throw new Error(`Customer ${id} didn't checked in`);
      const key = `${checkIn.stationName}-${stationName}`;
      const { sum, count } = this.avg.get(key) ?? { sum: 0, count: 0 };
      this.avg.set(key, { sum: sum + (t - checkIn.t), count: count + 1 });
    }
    getAverageTime(startStation, endStation) {
      const { sum, count } = this.avg.get(`${startStation}-${endStation}`) ?? { sum: 0, count: 0 };
      return sum / count;
    }
  }