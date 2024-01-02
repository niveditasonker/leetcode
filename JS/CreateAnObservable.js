class Observable {
  
    constructor(setup) {
      this.subscriberCallback = setup;
    }
   
    subscribe(subscriber) {
      let isUnSubscribed = false;
  
      let sub = {
        unsubscribe: () => {
          isUnSubscribed = true;
        },
        next: (value) => {
          if (isUnSubscribed) return;
          if (subscriber instanceof Function) subscriber(value)
          else if (subscriber.next) subscriber.next(value); 
        },
        error: (error) => {
          if (isUnSubscribed) return;
          isUnSubscribed = true;
          if (subscriber.error) subscriber.error(error);
        },
        complete: () => {
          if (isUnSubscribed) return;
          isUnSubscribed = true;
          if (subscriber.complete) subscriber.complete();
        },
      };
  
      this.subscriberCallback(sub);
      return sub;
    }
}

const observable = new Observable((subscriber)=> {
  subscriber.next(1)
  subscriber.next(2)
  setTimeout(() => {
    subscriber.next(3)
    subscriber.next(4)
    subscriber.complete()
  }, 100)
});

const hello = (e) => {
  console.log(e);
}

const sub = observable.subscribe(hello);