function multiplyMatrices(matrix1, matrix2) {
    if (matrix1[0].length !== matrix2.length) {
        throw new Error('The number of columns in the first matrix must be equal to the number of rows in the second matrix.');
    }

    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}

// Exemplo de uso:
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
const result = multiplyMatrices(matrix1, matrix2);
console.log(result);