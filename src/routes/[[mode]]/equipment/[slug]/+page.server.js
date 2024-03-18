import { FullEquipmentStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new FullEquipmentStore()
    const res = await query.fetch({ event, variables: { id: event.params.slug } })
    const { gear } = res.data

    return { gear: clean(gear) }
}