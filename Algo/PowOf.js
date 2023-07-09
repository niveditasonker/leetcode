var myPow = function (x, n) {

    function helper(x, n) {
      if (n === 0) return 1;
      if (x === 0) return 0;
      return n % 2 === 0
        ? helper(x, n / 2) ** 2
        : x * helper(x, (n - 1) / 2) ** 2;
    }

    const res = helper(x, Math.abs(n));

    return n < 0 ? 1 / res : res;
};