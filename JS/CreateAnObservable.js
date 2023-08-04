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