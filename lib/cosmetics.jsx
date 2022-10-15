import { OUTFITS, MIA_OUTFITS, ACCESSORIES, HEADWEAR, AVATARS, AVATAR_FRAMES, CHAT_BUBBLES } from "../data/en-US/cosmetics/cosmetics";

// the following can probably all be rewritten to a single pair of functions, taking in a parameter to know which array to sort from

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

// Mi-a Outfits

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

// Accessories

export async function getAccessoryData(id) {
    const result = ACCESSORIES.find(item => {
        if (item.uri === id) {
            return item;
        }
    })
    return result;
}

export function getAccessoryIds() {
    return ACCESSORIES.map(item => {
        return {
            params: {
                id: item.uri
            },
        };
    });
}

// Headwear

export async function getHeadwearData(id) {
    const result = HEADWEAR.find(item => {
        if (item.uri === id) {
            return item;
        }
    })
    return result;
}

export function getHeadwearIds() {
    return HEADWEAR.map(item => {
        return {
            params: {
                id: item.uri
            },
        };
    });
}

// Avatars

export async function getAvatarData(id) {
    const result = AVATARS.find(item => {
        if (item.uri === id) {
            return item;
        }
    })
    return result;
}

export function getAvatarIds() {
    return AVATARS.map(item => {
        return {
            params: {
                id: item.uri
            },
        };
    });
}

// Avatar Frames

export async function getAvatarFrameData(id) {
    const result = AVATAR_FRAMES.find(item => {
        if (item.uri === id) {
            return item;
        }
    })
    return result;
}

export function getAvatarFrameIds() {
    return AVATAR_FRAMES.map(item => {
        return {
            params: {
                id: item.uri
            },
        };
    });
}

// Chat Bubbles

export async function getChatBubbleData(id) {
    const result = CHAT_BUBBLES.find(item => {
        if (item.uri === id) {
            return item;
        }
    })
    return result;
}

export function getChatBubbleIds() {
    return CHAT_BUBBLES.map(item => {
        return {
            params: {
                id: item.uri
            },
        };
    });
}