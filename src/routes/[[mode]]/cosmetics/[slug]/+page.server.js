import { FullOutfitStore } from '$houdini'

export const load = async (event) => {
    // Outfit full data
    const outfitQuery = new FullOutfitStore()
    const outfitRes = await outfitQuery.fetch({ event, variables: { id: event.params.slug } })
    const outfit = outfitRes.data.outfit

    return { outfit }
}