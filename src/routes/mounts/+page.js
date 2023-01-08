import { fetchAllMounts } from '$lib/utils'

export const load = async () => {
    const items = await fetchAllMounts()
    return { items }
}