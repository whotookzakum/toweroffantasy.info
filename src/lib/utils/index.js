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

    // Sort characters by when they were first introduced
    // Only the characters that were in the limited banner need to be sorted
    // Standard characters were already fetched alphabetically
    allItems.sort((a, b) => {
        const firstBannerA = a.banners ? a.banners.cn[0].bannerNo : -1
        const firstBannerB = b.banners ? b.banners.cn[0].bannerNo : 1
        return firstBannerB - firstBannerA
    })

    return allItems
}

export const fetchAllBanners = async (version) => {
    const allSimulacrumFiles = import.meta.glob('/src/lib/data/simulacra/*.json')
    const iterableItemFiles = Object.entries(allSimulacrumFiles)

    const allSimulacra = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            const itemPath = path.slice(13, -5)
            const simulacrumName = itemPath.split('/simulacra/').pop()
            const weapon = await import(`../data/weapons/${simulacrumName}.json`)

            return {
                name: data.default.name,
                element: weapon.element,
                banners: data.default.banners,
                path: itemPath,
            }
        })
    )

    const sortedBanners = []

    const allSimulacraInVersion = allSimulacra.filter(simulacrum => simulacrum.banners && simulacrum.banners[version])

    allSimulacraInVersion.forEach(simulacrum => {
        const { banners, ...otherData } = simulacrum
        banners[version].forEach(banner => {
            sortedBanners.push({ ...otherData, ...banner })
        })
    })

    sortedBanners.sort((a, b) => b.bannerNo - a.bannerNo)

    return sortedBanners
}