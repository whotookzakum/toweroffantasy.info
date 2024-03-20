import { AllEquipmentsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllEquipmentsStore()
    const { data } = await query.fetch({ event })
    const gears = data.gears.filter(g => !g.id.includes("item_mine") && !g.id.includes("core_exp"))
        
    return { gears: clean(gears) }
}
