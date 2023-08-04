/**
 * @param {number} millis
 */
async function sleep(millis) {
    await wait(millis);
}

function wait(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

async function sleep(millis) {
    const res = await new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve();
            }, millis);
        } catch(err){
            reject(err);
        }
    });
    return res;
}

// /** 
//  * let t = Date.now()
//  * sleep(100).then(() => console.log(Date.now() - t)) // 100