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

  function race2(promises) {
    let isSettled = false
    return new Promise((resolve, reject) => {
      promises.forEach(promise => promise.then((data) => {
        if (!isSettled) {
          resolve(data)
          isSettled = true
        }
      }, (error) => {
        if (!isSettled) {
          reject(error)
          isSettled = true
        }
      }))
    })
  }