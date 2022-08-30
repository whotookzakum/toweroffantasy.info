import { OUTFITS } from "../data/en-US/cosmetics/cosmetics";

export async function getOutfitData(id) {
    const result = OUTFITS.find(outfit => {
        if (outfit.uri === id) {
            return outfit;
        }
    })
    return result;
}

export function getAllOutfitIds() {
    return OUTFITS.map(outfit => {
        return {
            params: {
                id: outfit.uri
            },
        };
    });
}
