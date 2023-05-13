import { fetchAllMatrices, fetchAllWeapons } from '$lib/utils'
import { existsSync } from "node:fs";
import path from 'node:path';

export const load = async ({ params }) => {
    const simulacrum = await import(`../../../lib/data/simulacra/${params.slug}.json`)
    const weapon = await import(`../../../lib/data/weapons/${params.slug}.json`)
    const cnData = await fetchSimulacrumCNData(params.slug);

    // Append some weapon data to recommended weapon pairing objects
    const allWeaponsData = await fetchAllWeapons()
    const recommendedPairings = await weapon.recommendedPairings.map(recWep => {
        const wepData = allWeaponsData.find(w => w.path.split("/weapons/")[1] === recWep.toLowerCase().replace(" ", "-"))
        return {
            ...recWep,
            wepName: wepData.name,
            wepType: wepData.type,
            wepElement: wepData.element,
            imgSrc: wepData.imgSrc,
            meta: wepData.meta,
            pathToSimulacrum: wepData.path.replace("weapons", "simulacra"),
        }
    })

    // Append ALL matrix data, such as 2pc and 4pc effects, to the recommended matrix objects
    const allMatricesData = await fetchAllMatrices()
    const recommendedMatrices = weapon.recommendedMatrices.map(matrix => {
        const matrixData = allMatricesData.find(m => m.name === matrix.name)
        return { ...matrix, ...matrixData }
    })

    return { 
        ...simulacrum.default, 
        weapon: { 
            ...weapon.default, 
            recommendedMatrices, 
            recommendedPairings 
        }, 
        cnData: cnData 
    }
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