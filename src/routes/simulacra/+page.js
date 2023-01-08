import { fetchAllSimulacra } from '$lib/utils'

export const load = async () => {
    const items = await fetchAllSimulacra()
    return { items }
}