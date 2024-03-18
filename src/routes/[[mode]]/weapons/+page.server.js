import { AllWeaponsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllWeaponsStore()
    const { data } = await query.fetch({ event })
    const { weapons } = data
    return { weapons: clean(weapons) }
}
