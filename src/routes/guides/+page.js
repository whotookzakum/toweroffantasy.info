import { fetchAllGuides } from '$lib/utils'

export const load = async () => {
    const items = await fetchAllGuides()
    return { items }
}