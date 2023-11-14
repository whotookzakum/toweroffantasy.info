import { fetchAllBanners } from '$lib/utils'
import { load_MyQuery } from '$houdini'

export const load = async (event) => {
    const cn = await fetchAllBanners("cn")
    const glob = await fetchAllBanners("glob")
    
    return {
        // Import the query here if you are loading it alongside other data. Otherwise this +page.js doesn't need to exist.
        // https://houdinigraphql.com/guides/working-with-graphql "Manual Loads"
        // https://houdinigraphql.com/api/query#manual-loading
        ...(await load_MyQuery({ event })),
        cn,
        glob
    }
}