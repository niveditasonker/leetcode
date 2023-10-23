var maxVacationDays = function(flights, days) {
    let n = flights.length, k = days[0].length;
    let memo = Array(n);
    for (var i = 0; i < n; i++) memo[i] = Array(k);
    return recurse(0, 0);
    
    function recurse(city, week) {
      if (week === k) return 0;
      if (memo[city][week] !== undefined) return memo[city][week];
      let maxVacation = days[city][week] + recurse(city, week + 1);
      for (var i = 0; i < n; i++) {
        if (flights[city][i]) {
          maxVacation = Math.max(maxVacation, days[i][week] + recurse(i, week + 1));
        }
      }
      memo[city][week] = maxVacation;
      return maxVacation;
    }
  };

// Time Complexity: O(n^2 * k) 180ms
// Space Complexity: O(nk) 43.6MB