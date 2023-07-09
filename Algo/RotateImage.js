var rotate = function(matrix) {
    let output = [];

    for(i=0; i< matrix.length; i++){
        for (let j=0; j<matrix.length; j++){
            output.push(matrix[i][j]);
        }
    }

    // console.log(output);
    // console.log(matrix);

    for (let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            matrix[j][i] = output.shift();
        }
    }

    // console.log(output);
    // console.log(matrix);

    for (let i=0; i<matrix.length; i++){
        matrix[i] = matrix[i].reverse();
    }

    // console.log(output);
    // console.log(matrix);
    return matrix;
};

var rotateUsingTranspose = function(matrix){
    let n = matrix.length;

    // to transpose
    for (i=0; i<n; i++){
        for (let j=i; j< n; j++){
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    console.log(matrix);

    // to reverse
    for (let i=0; i< n; i++){
        for (let j=0; j<n/2; j++){
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = tmp;
        }
    }

    return matrix;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
console.log(rotate(matrix));

matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Transpose & reverse");
console.log(rotateUsingTranspose(matrix));
