import { fetchAllMatrices } from '$lib/utils'
import { existsSync } from "node:fs";

export const load = async ({ params }) => {
    const simulacrum = await import(`../../../lib/data/simulacra/${params.slug}.json`)
    const weapon = await import(`../../../lib/data/weapons/${params.slug}.json`)
    const cnData = await fetchSimulacrumCNData(params.slug);
    
    const allMatricesData = await fetchAllMatrices()
    const recommendedMatrices = weapon.recommendedMatrices.map(matrix => {
        const matrixData = allMatricesData.find(m => m.name === matrix.name)
        return { ...matrix, ...matrixData }
    })

    return { ...simulacrum.default, weapon: {...weapon.default, recommendedMatrices}, cnData: cnData }
}

const fetchSimulacrumCNData = async (fileName) => {
    let cnData = {} // bro come on returning an empty object is way easier than checking if cnData exists multiple times everywhere

    if (existsSync(`src/lib/data_cn/simulacra/${fileName}.json`)) {
        let simulacrum = await import(`../../../lib/data_cn/simulacra/${fileName}.json`)
        cnData = { ...cnData, ...simulacrum.default }
    }

    if (existsSync(`src/lib/data_cn/weapons/${fileName}.json`)) {
        let weapon = await import(`../../../lib/data_cn/weapons/${fileName}.json`)
        cnData = { ...cnData, weapon: weapon.default }
    }

    return cnData
}