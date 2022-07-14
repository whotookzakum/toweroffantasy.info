import { CHARACTERS } from '../data/en-US/characters/characterList';

export async function getSimulacrumData(id) {
    const result = CHARACTERS.find(character => {
        if (character.uri === id) {
            return character;
        }
    })
    return result;
}

export function getAllSimulacrumIds() {
    return CHARACTERS.map((character) => {
        return {
            params: {
                id: character.uri
            },
        };
    });
}
