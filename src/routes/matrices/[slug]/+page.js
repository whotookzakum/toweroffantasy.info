export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/matrices/${params.slug}`)
    const matrix = await response.json()

    const responseSimulacra = await fetch(`/api/simulacra`)
    const simulacra = await responseSimulacra.json()
    const matchingSimulacra = 
        simulacra.filter(sim => sim.weapon.recommendedMatrices.some(set => set.name === matrix.name))

    return { ...matrix, matchingSimulacra }
}

