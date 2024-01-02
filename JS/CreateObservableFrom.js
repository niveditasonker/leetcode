function observableFromObservable(input) {
    return new Observable((sub) => {
      input.subscribe(sub)
    });
}
  
function observableFromPromise(input) {
    return new Observable((sub) => {
        input.then((val) => {
          sub.next(val);
        }, (err) => {
          sub.error(err);
        }).then(() => {
          sub.complete();
        });
    });
}
  
function observableFromIterable(input) {
    return new Observable((sub) => {
      try {
        for(let el of input) {
          sub.next(el);
        }
      } catch (err) {
        sub.error(err);
      }
      sub.complete();
    });
}
  
function observableFromArrayLike(input) {
    return new Observable((sub) => {
        try {
        for(let i = 0; i < input.length; i++) {
            sub.next(input[i]);
        }
        } catch (err) {
        sub.error(err);
        }
        sub.complete();
    });
}

function from(input) {
    if (input instanceof Observable) {
      return observableFromObservable(input);
    }
    if (input instanceof Promise) {
      return observableFromPromise(input);
    }
    if(Array.isArray(input) || typeof input[Symbol.iterator] === 'function') {
      return observableFromIterable(input);
    }
    if('length' in input) {
      return observableFromArrayLike(input);
    }
    throw new Error('Incorrect input type');
  }
  
  
