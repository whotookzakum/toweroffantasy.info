import { FullOutfitStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    // Outfit full data
    const outfitQuery = new FullOutfitStore()
    const outfitRes = await outfitQuery.fetch({ event, variables: { id: event.params.slug } })
    const outfit = outfitRes.data.outfit

    return { outfit: clean(outfit) }
}