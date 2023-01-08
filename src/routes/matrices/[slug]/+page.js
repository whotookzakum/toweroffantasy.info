import { fetchAllSimulacra } from '$lib/utils'

export const load = async ({ params }) => {
    const matrix = await import(`../../../lib/data/matrices/${params.slug}.json`)

    const simulacra = await fetchAllSimulacra()
    const matchingSimulacra = 
        simulacra.filter(sim => sim.weapon.recommendedMatrices.some(set => set.name === matrix.name))

    return { ...matrix, matchingSimulacra }
}