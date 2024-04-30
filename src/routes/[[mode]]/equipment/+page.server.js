import { AllEquipmentsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

    const query = new AllEquipmentsStore()
    const { data } = await query.fetch({ event, variables: { version, lang } })
    // Because crystals are considered "equipment"
    const gears = data.gears.filter(g => !g.id.includes("item_mine") && !g.id.includes("core_exp"))
        
    return { gears: clean(gears) }
}
