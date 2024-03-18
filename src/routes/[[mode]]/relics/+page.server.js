import { AllRelicsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllRelicsStore()
    const { data } = await query.fetch({ event })
    const { relics } = data
    return { relics: clean(relics) }
}
