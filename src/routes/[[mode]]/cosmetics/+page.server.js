import { AllOutfitsStore } from '$houdini'

export const load = async (event) => {
    const query = new AllOutfitsStore()
    const { data } = await query.fetch({ event })
    const { outfits } = data
    return { outfits }
}
