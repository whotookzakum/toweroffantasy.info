import { MATRICES } from "../data/en-US/matrices/matrixList";
import { CHARACTERS } from "../data/en-US/characters/characterList";

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

export function getRecommendedWeapons(id, set) {
    return CHARACTERS.filter(char => char.weapon.recommendedMatrix[`set${set}`]?.includes(id));
}