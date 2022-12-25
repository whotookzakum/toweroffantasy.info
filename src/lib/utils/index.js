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