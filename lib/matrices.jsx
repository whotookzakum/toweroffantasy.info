import { MATRICES } from "../data/en-US/matrices/matrixList";

export async function getMatrixData(id) {
    const result = MATRICES.find(matrix => {
        if (matrix.uri === id) {
            return matrix;
        }
    })
    return result;
}

export function getAllMatrixIds() {
    return MATRICES.map(matrix => {
        return {
            params: {
                id: matrix.uri
            },
        };
    });
}
