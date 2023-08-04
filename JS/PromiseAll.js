async function all(promises) {
  const results = [];

  for (let promise of promises) {
    results.push(await promise);
  }

  return results;
}

function all(promises) {
  return new Promise(async (resolve, reject) => {
    const data = []

    try {
      for await(const v of promises) {
        data.push(v)
      }
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}