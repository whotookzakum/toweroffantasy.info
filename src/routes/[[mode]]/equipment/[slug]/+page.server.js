import { FullEquipmentStore, AllEquipmentsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

    const query = new FullEquipmentStore()
    const res = await query.fetch({ event, variables: { id: event.params.slug, version, lang } })
    const { gear } = res.data

    // Because crystals are considered "equipment"
    // Remove if added to the API
    const allGearsQuery = new AllEquipmentsStore()
    const allGearsRes = await allGearsQuery.fetch({ event, variables: { version, lang } })
    const allGears = allGearsRes.data.gears
    gear.matList = gear.matList.map(matId => allGears.find(g => g.id?.toLowerCase() === matId.toLowerCase()))
    
    return { gear: clean(gear) }
}