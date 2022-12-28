// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
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
                weapon: weapon.default,
                path: itemPath,
            }
        })
    )

    // Sort characters by when they were first introduced
    // Only the characters that were in the limited banner need to be sorted
    // Standard characters were already fetched alphabetically
    allItems.sort((a, b) => {
        const firstBannerA = a.banners?.cn[0].bannerNo ?? -1
        const firstBannerB = b.banners?.cn[0].bannerNo ?? 1
        return firstBannerB - firstBannerA
    })

    return allItems
}

export const fetchSimulacrum = async (fileName) => {
    const simulacrum = await import(`../data/simulacra/${fileName}.json`)
    const weapon = await import(`../data/weapons/${fileName}.json`)
    const result = simulacrum.default
    return { ...result, weapon: weapon.default }
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

    const allSimulacraInVersion = allSimulacra.filter(simulacrum => simulacrum.banners?.[version])

    allSimulacraInVersion.forEach(simulacrum => {
        const { banners, ...otherData } = simulacrum
        banners[version].forEach(banner => {
            sortedBanners.push({ ...otherData, ...banner })
        })
    })

    sortedBanners.sort((a, b) => b.bannerNo - a.bannerNo)

    return sortedBanners
}

export const fetchAllRelics = async () => {
    const allRelicFiles = import.meta.glob('/src/lib/data/relics/*.json')
    const iterableItemFiles = Object.entries(allRelicFiles)

    const allItems = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            const itemPath = path.slice(13, -5)

            return {
                ...data.default,
                path: itemPath,
            }
        })
    )

    return allItems
}

export const fetchRelic = async (fileName) => {
    const relic = await import(`../data/relics/${fileName}.json`)
    return relic
}


export const fetchAllMounts = async () => {
    const allRelicFiles = import.meta.glob('/src/lib/data/mounts/*.json')
    const iterableItemFiles = Object.entries(allRelicFiles)

    const allItems = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            const itemPath = path.slice(13, -5)

            return {
                ...data.default,
                path: itemPath,
            }
        })
    )

    allItems.sort((a, b) => b.id - a.id)

    return allItems
}

export const fetchMount = async (fileName) => {
    const relic = await import(`../data/mounts/${fileName}.json`)
    return relic
}

export const fetchAllMatrices = async () => {
    // Globally fetch all matrices
    const allMatricesFiles = import.meta.glob('/src/lib/data/matrices/*.json')
    // put matrices into array
    const iterableItemFiles = Object.entries(allMatricesFiles)

    const allItems = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            // generate path based on file name
            const itemPath = path.slice(13, -5)

            return {
                ...data.default,
                path: itemPath,
            }
        })
    )

    // Sort matrices by matrix id
    allItems.sort((a, b) => b.id - a.id)

    return allItems
}

export const fetchMatrix = async (fileName) => {
    const matrix = await import(`../data/matrices/${fileName}.json`)
    return matrix.default
}