import { AllOutfitsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllOutfitsStore()
    const { data } = await query.fetch({ event })
    const { outfits } = data
    return { outfits: clean(outfits) }
}
