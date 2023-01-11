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

export const fetchAllBanners = async (version) => {
    const allSimulacra = await fetchAllSimulacra()

    const simulacraInVersion =
        allSimulacra
            .filter(simulacrum => simulacrum.banners?.[version])
            .map(simulacrum => {
                return {
                    name: simulacrum.name,
                    element: simulacrum.weapon.element,
                    type: simulacrum.weapon.type,
                    banners: simulacrum.banners,
                    path: simulacrum.path
                }
            })

    const allBanners = []

    // Get every banner instance for every simulacrum
    simulacraInVersion.forEach(simulacrum => {
        simulacrum.banners[version].forEach(banner => {
            allBanners.push({ ...simulacrum, ...banner })
        })
    })

    return allBanners.sort((a, b) => b.bannerNo - a.bannerNo)
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

export const propExists = (prop, obj) => Boolean(typeof obj === "object" && prop in obj);

export const match = (initialValue = true) => {
    const bool = Boolean(initialValue);

    return {
        all: (...conditions) => {
            if (!bool) return match(false);
            return match(bool && conditions.reduce((a, b) => Boolean(a && b)));
        },
        some: (...conditions) =>
            match(bool || conditions.reduce((a, b) => Boolean(a || b))),
        none: (...conditions) => match(!bool && !conditions.reduce((a, b) => Boolean(a && b))),
        then: (f) => {
            if (bool) f();
            return {
                catch: (f) => {
                    if (!bool) f();
                }
            };
        },
        toBoolean: () => bool
    };
};
