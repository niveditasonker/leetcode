/*

Question Description
We want to protect an API endpoint with an in-memory rate limiter.
The rate limiter should be initialized with a value that represents the maximum requests
per second we want to allow. When a request hits the endpoint, the rate limiter is
asked whether it has capacity to process this request and will reject or accept the request appropriately.

Assume:
_ Time is measured in millisecond resolution
- API requests come in sequentially

Design the interface and implement the logic for the rate limiter.
*/


class RateLimiter{
    constructor(windowSizeMs, maxRequestsPerWindow) {
        this.capacity = windowSizeMs;
        this.queue = [];
        this.maxRequests = maxRequestsPerWindow;
        this.currRequest = 0;
    }

    submitRequest(timestamp){
        if (this.queue.length > 0){
            const lastTimestamp = this.queue[0];
            const diff = timestamp - lastTimestamp;

            if (diff >= this.capacity){
                this.currRequest -= 1;
                this.queue.shift();
            }
        }

        if (this.currRequest < this.maxRequests){
            this.queue.push(timestamp);
            this.currRequest += 1;
            return true;
        }

        return false;
    }
}

function main() {
    let users = [
        {id:1 , rate: [1000, 2]},
        {id:2 , rate: [1000, 2]},
        {id:3 , rate: [1000, 2]},
        {id:4 , rate: [1000, 2]},
        {id:5 , rate: [1000, 2]},
        {id:6,  rate: [1000, 2]},
        {id:1 , rate: [1100, 2]},
        {id:1 , rate: [1200, 2]},
    ];
    const arr = [1100, 1200, 1300, 2100, 2150, 2200];

    const userMap = {};

    const rate = new RateLimiter(1000, 2);

    for (let u of users){
        console.log(u.id, u.rate);
        const [cap, sz] = u.rate;
        if (!userMap[u.id]){
            userMap[u.id] = [new RateLimiter(cap, sz)];
        } else{
            userMap[u.id].push(cap, sz);
        }
    }

    console.log(userMap);

    for (let t of arr){
        console.log(t, rate.submitRequest(t));
    }
}

main();


// Follow ups:
// 1. What if you have lots of users with different user ids? How do you handle their limits?
//  Map<userId, bucket>
