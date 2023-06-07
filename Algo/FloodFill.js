var floodFill = function(image, sr, sc, color) {
    const currColor = image[sr][sc];

    function dfs(img, row, col, color, currColor) {
        console.log(`currColor: ${currColor},row: ${row}, col: ${col}, ${img[row][col]}, color: ${color}`);
        if (img[row][col] === currColor) {
            img[row][col] = color;

            if (row >= 1) {
                dfs (img, row-1, col, color, currColor);
            }

            if (col >= 1) {
                dfs (img, row, col-1, color, currColor);
            }

            if (row+1 < img.length) {
                dfs (img, row+1, col, color, currColor);
            }

            if (col+1 < img[0].length) {
                dfs (img, row, col+1, color, currColor);
            }
        }
    }

    if (currColor !== color) {
        dfs(image, sr,sc, color, currColor);
        return image;
    } else {
        return image;
    }
};

let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2;
console.log(floodFill(image, sr, sc, color));