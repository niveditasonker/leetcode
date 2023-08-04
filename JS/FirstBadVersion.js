function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
    let start = 0, end = version;

    while(start <= end){
      let mid = Math.floor((start+end)/2);

      if(isBad(mid)){
        end = mid -1;
      } else {
        start = mid + 1;
      } 
    }
    return start <= version ? start : -1;
  }
}

console.log(firstBadVersion((i) => i >= 4)(100));
console.log(firstBadVersion((i) => i >= 4)(4));
console.log(firstBadVersion((i) => i >= 5)(3));
console.log(firstBadVersion((i) => i >= 1)(1));
console.log(firstBadVersion((i) => i >= 1)(2) );
