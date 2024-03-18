import { AllMountsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllMountsStore()
    const { data } = await query.fetch({ event })
    const { mounts } = data
    return { mounts: clean(mounts) }
}
