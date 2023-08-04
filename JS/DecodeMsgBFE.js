function decode(message) {
    let i = 0, j = 0, cols = message[0]?.length
    let decoded = '', step = 1
  
    while(j < cols) {
      decoded += message[i][j]
      if(!message[i+step]){
        step *= -1
      }
      i += step
      j++
    }
  
    return decoded
  }

function decode2(message) {
    // your code here
    if(!message.length || !message[0].length) return ""
    let i=0,j=0,fromTop=true,res=""
    while(j<message[0].length){
      if(fromTop){
        res+=message[i++][j++]
      }else{
        res+=message[i--][j++]
      }
      if(i===message.length-1) fromTop=false
      if(i===0) fromTop=true
    }
    return res
} 

let arr = [['I','B','C','A','L','K','A'],
    ['D','R','F','C','A','E','A'],
   ['G','H','O','E','L','A','D']];

const arry = [
    ['A', 'B', 'C', 'D', 'E', 'F'],
    ['G', 'H', 'I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P', 'R', 'S'],
  ]   

console.log(decode(arr));
console.log(decode(arry));

console.log(decode2(arr));
console.log(decode2(arry));