
// https://bigfrontend.dev/problem/merge-identical-API-calls
// const getAPI = (path, config) => { ... }

// const list1 = await getAPI('/list', { keyword: 'bfe'})
// const list2 = await getAPI('/list', { keyword: 'dev'})

const cache = new Map();

function getAPIWithMerging(path, config) {
    
    // your code here
    const key = getKey(path, config);

    const result = cache.get(key);

    if (result) {
        if (result.expiredAt > Date.now()){
            return Promise.resolve(result.promise);
        }
        cache.delete(key);
    }

    const promise = getAPI(path, config);
    cache.set(key, { promise, expiredAt: Date.now() + 1000 })
    return promise;
}

getAPIWithMerging.clearCache = () => {
    cache.clear();
}

function getKey(path, config){
    const arr = [path];
    const keys = Object.keys(config);
    keys.sort();

    for (let k of keys){
        arr.push([k, config[k]]);
    }

    return JSON.stringify(arr);
}


function getAPIWithMerging(path, config) {
  const key = getHashKey(path, config);
  const result = cache.get(key);
  if(result) {
    if(result.expiredAt > Date.now()) {
      return Promise.resolve(result.promise);
    }
    cache.delete(key);
  }
  const promise = getAPI(path, config);
  cache.set(key, { promise, expiredAt: Date.now() + 1000 })
  return promise;
}

getAPIWithMerging.clearCache = () => {
  cache.clear();
}

function getHashKey(path, config) {
  const arr = [path];
  const keys = Object.keys(config);
  keys.sort()
  for(let key of keys) {
    arr.push([key, config[key]]);
  }
  return JSON.stringify(arr);
}