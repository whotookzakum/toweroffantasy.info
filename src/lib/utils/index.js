export const fetchAllSimulacra = async () => {
    const allSimulacrumFiles = import.meta.glob('/src/lib/data/simulacra/*.json')
    const iterableItemFiles = Object.entries(allSimulacrumFiles)

    const allItems = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            const itemPath = path.slice(13, -5)
            const simulacrumName = itemPath.split('/simulacra/').pop()
            const weapon = await import(`../data/weapons/${simulacrumName}.json`)

            return {
                ...data.default,
                weapon,
                path: itemPath,
            }
        })
    )

    allItems.sort((a, b) => a.id - b.id)

    return allItems
}

export function getCNTranslation(text) {
    switch (text) {
        // Weapon Type
        case "dps":
            return "qianggong";
        case "defense":
            return "fangyu";
        case "support":
            return "zengyi";

        // Weapon Element
        case "flame":
            return "huo";
        case "ice":
            return "bing";
        case "volt":
            return "lei";
        case "physical":
            return "wu";
        case "altered":
            return "powers";

        // Weapon Base Stats
        case "attack":
            return "atk"
        case "health":
            return "hp"
        case "crit":
            return "baoji"
        case "resistance":
            return "resist_all"
    }
}