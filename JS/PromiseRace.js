function race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject);
      });
    });
  }

  function race(promises) {
    // your code here
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        promise
          .then(data => resolve(data))
          .catch(err => reject(err))
      })
    })
  }