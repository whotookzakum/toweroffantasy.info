import { AllServantsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllServantsStore()
    const { data } = await query.fetch({ event })
    const { servants } = data
    return { servants: clean(servants) }
}
