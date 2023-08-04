function isMatch(s1, s2) {
    let s1idx = 0, s2idx = 0;
  
    while (s1idx < s1.length && s2idx < s2.length) {
    //   const currBinary = s1.charAt(s1idx) - '0';
      const currBinary = parseInt(s1.charAt(s1idx));
      if (currBinary === 0 && s2.charAt(s2idx) === 'B') {
        s2idx = findLast(s2, s2idx);
      }
  
      s1idx++;
      s2idx++;
    }
  
    return s1idx >= s1.length;
}
  
function findLast(s2, s2idx) {
    while (s2idx < s2.length && s2.charAt(s2idx) === 'B') {
      s2idx++;
    }
  
    return s2idx;
}
  