import { GUIDES } from "../data/en-US/guides/guideList";

export async function getGuideData(id) {
    const result = GUIDES.find(guide => {
        if (guide.uri === id) {
            return guide;
        }
    })
    return result;
}

export function getAllGuideIds() {
    return GUIDES.map(guide => {
        const uri = guide.uri;
        return {
            params: {
                id: uri
            },
        };
    });
}
