import { RELICS } from "../data/en-US/relics/relicList";

export async function getRelicData(id) {
    const result = RELICS.find(relic => {
        if (relic.uri === id) {
            return relic;
        }
    })
    return result;
}

export function getAllRelicIds() {
    return RELICS.map(relic => {
        return {
            params: {
                id: relic.uri
            },
        };
    });
}
