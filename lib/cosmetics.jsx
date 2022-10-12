import { OUTFITS, MIA_OUTFITS } from "../data/en-US/cosmetics/cosmetics";

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

export async function getMiaOutfitData(id) {
    const result = MIA_OUTFITS.find(outfit => {
        if (outfit.uri === id) {
            return outfit;
        }
    })
    return result;
}

export function getAllMiaOutfitIds() {
    return MIA_OUTFITS.map(outfit => {
        return {
            params: {
                id: outfit.uri
            },
        };
    });
}