import { fetchAllServants } from '$lib/utils'

export const load = async () => {
    const items = await fetchAllServants()
    return { items }
}