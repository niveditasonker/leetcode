class RateLimiterSelf {
    constructor() {
        this.requests = {};
    }

    isAllowed(clientId) {
        const timeInSecs = Math.floor(Date.now()/10000);
        const requestTime = timeInSecs - 1;
        const allRequests = this.requests[clientId] || [];

        const updatedRequest = allRequests.filter((ts) => ts > requestTime);

        if (updatedRequest.length > 100){
            return false;
        }

        this.requests[clientId] = updatedRequest;
        updatedRequest.push(requestTime);
        return true;
    }
}

// From ChatGPT:

class RateLimiter {
    constructor(maxRequests, perInterval, interval) {
      this.maxRequests = maxRequests;
      this.perInterval = perInterval;
      this.interval = interval;
      this.requests = [];
    }
  
    requestAllowed() {
      const now = Date.now();
      const startTime = now - this.interval;
  
      this.requests = this.requests.filter((time) => time > startTime);
  
      if (this.requests.length < this.maxRequests) {
        this.requests.push(now);
        return true;
      }
  
      return false;
    }
  }
  
  // Example usage:
  const limiter = new RateLimiter(5, 10, 1000); // Allow 5 requests per 10 milliseconds interval
  
  console.log(limiter.requestAllowed()); // true
  console.log(limiter.requestAllowed()); // true
  console.log(limiter.requestAllowed()); // true
  console.log(limiter.requestAllowed()); // true
  console.log(limiter.requestAllowed()); // true
  console.log(limiter.requestAllowed()); // false (exceeded maximum requests)
  

// const limiterSelf = new RateLimiterSelf(5, 10, 1000); // Allow 5 requests per 10 milliseconds interval

// console.log(limiter.isAllowed()); // true
// console.log(limiter.isAllowed()); // true
// console.log(limiter.isAllowed()); // true
// console.log(limiter.isAllowed()); // true
// console.log(limiter.isAllowed()); // true
// console.log(limiter.isAllowed()); // false