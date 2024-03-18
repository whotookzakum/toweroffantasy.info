import { AllEquipmentsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllEquipmentsStore()
    const { data } = await query.fetch({ event })
    const { gears } = data
    return { gears: clean(gears) }
}
