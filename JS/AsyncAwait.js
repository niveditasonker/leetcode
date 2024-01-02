const countTimer = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Time is up!');
        }, 3000);
    });
}

const startTimer = async() => {
    console.log('Timer activated');
    const res = await countTimer();
    console.log(res);
}

startTimer();