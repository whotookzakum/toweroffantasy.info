import { FullEquipmentStore, AllEquipmentsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new FullEquipmentStore()
    const res = await query.fetch({ event, variables: { id: event.params.slug } })
    const { gear } = res.data

    // Remove if added to the API
    const allGearsQuery = new AllEquipmentsStore()
    const allGearsRes = await allGearsQuery.fetch({ event })
    const allGears = allGearsRes.data.gears
    gear.matList = gear.matList.map(matId => allGears.find(g => g.id?.toLowerCase() === matId.toLowerCase()))
    
    return { gear: clean(gear) }
}