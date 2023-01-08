import { fetchAllRelics } from '$lib/utils'

export const load = async () => {
    const items = await fetchAllRelics()
    return { items }
}