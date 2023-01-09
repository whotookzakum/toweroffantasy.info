import { fetchAllMatrices } from '$lib/utils'

export const load = async () => {
    const items = await fetchAllMatrices()
    return { items }
}