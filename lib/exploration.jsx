import { EXPLORATION } from "../data/en-US/exploration/exploration";

export async function getExplorationData(id) {
    const result = EXPLORATION.find(exploration => {
        if (exploration.uri === id) {
            return exploration;
        }
    })
    return result;
}

export function getAllExplorationIds() {
    return EXPLORATION.map(exploration => {
        return {
            params: {
                id: exploration.uri
            },
        };
    });
}
