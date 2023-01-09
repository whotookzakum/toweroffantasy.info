import { fetchAllBanners } from '$lib/utils'

export const load = async () => {
    const cn = await fetchAllBanners("cn")
    const glob = await fetchAllBanners("glob")

    return {
        cn, 
        glob
    }
}