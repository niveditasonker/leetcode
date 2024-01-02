// Below is a sol from leetcode
/*
Intuition
Map is used to store a list of callbacks for each event.
Approach
We will use Map to store a list of callbacks for each eventm=new Map().

Subscribe Method-
If the event is not present in the map previously, then we will do mp.set(event, [callback]).
Otherwise, we will append this callback to the callbackList of mp[event].
Unsubscribe Method -

we just remove this callback cb from the callbackList of event.
emit Method -

If the callbackList of this event is empty, we will return an empty array.
Otherwise, we will return a list containing the results of all the callbacks.

Complexity
Time complexity:O(NLogN)O(NLogN)O(NLogN)
Space complexity:O(N)O(N)O(N),where N is total count of callbacks.
*/
class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    
    subscribe(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
    
        let listeners = this.events.get(event);
        listeners.push(cb);
    
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(cb);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
                
            }
        };
    }
    
    emit(event, args = []) {
        if (!this.events.has(event)) {
            console.log('====> no event: ', this.events);
            return [];
        }
    
        const listeners = this.events.get(event);
        const results = [];
    
        for (const listener of listeners) {
            results.push(listener(...args));
        }
    
        console.log('====> results: ', results);
        return results;
    }
      
  }


  const evtEmitter = new EventEmitter()
  const callback = (...args) => console.log('EventEmitter called', ...args)
  
  const subscriber1  = evtEmitter.subscribe('event', callback);
  console.log('====> subscriber1: ', subscriber1);
  const subscriber2  = evtEmitter.subscribe('event', callback)
  
  subscriber1.unsubscribe()
  subscriber1.unsubscribe()
  subscriber1.unsubscribe()
  
  evtEmitter.emit('....event', '....sub2 should receive it');
  
  /**
   * const emitter = new EventEmitter();
   *
   * // Subscribe to the onClick event with onClickCallback
   * function onClickCallback() { return 99 }
   * const sub = emitter.subscribe('onClick', onClickCallback);
   *
   * emitter.emit('onClick'); // [99]
   * sub.unsubscribe(); // undefined
   * emitter.emit('onClick'); // []
   */

// Sol from BFE
class EventEmitterBFE {
    subscriptionsMap = new Map();

    subscribe(eventName, callback){
        if (!this.subscriptionsMap.has(eventName)){
            this.subscriptionsMap.set(eventName, new Set());
        }

        const curr = this.subscriptionsMap.get(eventName);

        const cbObj = {callback};
        console.log("curr:", curr, cbObj);
        curr.add(cbObj);

        return {
            release : () => {
                curr.delete(cbObj);
                if(curr.size == 0){
                    delete this.subscriptionsMap.eventName;
                }

            }
        }
    }

    emit(eventName, ...args){

        const currSub = this.subscriptionsMap.get(eventName);

        if (currSub){
            currSub.forEach(cb => {
                console.log("cb.callback:", cb.callback);
                cb.callback.apply(this, args);
            });
        }

    }
}

// const emitter = new EventEmitterBFE()
// const callback1 = (...args) => console.log('called', ...args)

// const sub1  = emitter.subscribe('event', callback1)
// const sub2  = emitter.subscribe('event', callback1)

// sub1.release()
// sub1.release()
// sub1.release()

// emitter.emit('event', 'sub2 should receive it');