const matrix = new Array(2);

for(let i=0; i<matrix.length;i++){
    matrix[i] = new Array(3);
}

let num = 1;

for(let i=0;i<2;i++){ // row
    for(let j=0;j<3;j++){ // column
        matrix[i][j] = num++;
    }
}
console.log(matrix);

// [[1,2,3],[4,5,6]]

// [[1,4],[2,5],[3,6]]

function transposeMatrix(matrix,row,column){
    if(!Array.isArray(matrix[0])) return "Invalid Matrix";

    let transposeMatrix = [...Array(column)].map(item => [])

    console.log(transposeMatrix);

    for(let i=0;i<column;i++){ // row
        for(let j=0;j<row;j++){ // column
            transposeMatrix[i][j] = matrix[j][i];
        }
    }

    return transposeMatrix;
}

console.log(transposeMatrix(matrix,2,3));