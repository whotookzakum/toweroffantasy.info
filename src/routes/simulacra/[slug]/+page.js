import { fetchAllMatrices } from '$lib/utils'

export const load = async ({ params }) => {
    const simulacrum = await import(`../../../lib/data/simulacra/${params.slug}.json`)
    const weapon = await import(`../../../lib/data/weapons/${params.slug}.json`)
    const allMatricesData = await fetchAllMatrices()

    const recommendedMatrices = weapon.recommendedMatrices.map(matrix => {
        const matrixData = allMatricesData.find(m => m.name === matrix.name)
        return { ...matrix, ...matrixData }
    })

    return { ...simulacrum, weapon: {...weapon, recommendedMatrices} }
}