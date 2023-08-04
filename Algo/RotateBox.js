// second sol is more readable

var rotateTheBox = function(box) {
    let matrix = new Array(box[0].length).fill(0).map(() => new Array(box.length).fill(0));
    console.log(matrix);

    for (let r=0; r<box[0].length; r++){
        for (let c=0; c<box.length; c++){
            matrix[r][c] = box[c][r];
        }

        matrix[r].reverse();
    }

    for (let i=0; i<matrix[0].length; i++){
        let k=0;
        for (let j=0; j<matrix.length; j++){
            if (matrix[j][i] === '.' && matrix[k][i] !== '*'){
                let tmp = matrix[j][i];
                matrix[j][i] = matrix[k][i];
                matrix[k][i] = tmp;
                k++;
            }
            
            if (matrix[j][i] == '*'){
                k = j+1;
            }
        }
    }

    return matrix;
};

let box = [["#",".","*","."],
["#","#","*","."]];
console.log(rotateTheBox(box));

//Javascript solution using transpose & 2-pointer concept

// More intutive sol:

var rotateTheBox = function(box) {
    for(let r=0; r<box.length;r++){
      let idx = null
      for(let c = 0;c<box[r].length;c++){
        const curr = box[r][c]
        if(curr === '*'){
          idx = null
          continue
        }
        if(curr === '#' && idx === null){
          idx = c
          continue
        }
        if(curr === '.' && 
           box[r][idx] === '#' && 
           idx <= c){
          box[r][idx] = '.'
          box[r][c] = '#'
          idx++;
        }
      }
    }
    return transpose(box)
};
  
function transpose(arr){
    const B = []
    for(let c = 0; c < arr[0].length; c++){
      if(!B[c]) B[c] = []
      for(let r = 0; r < arr.length; r++){ 
        B[c][r] = arr[r][c]
      }
      B[c].reverse();
    }
    return B
}