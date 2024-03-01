import { AllWeaponsStore } from '$houdini'

export const load = async (event) => {
    const query = new AllWeaponsStore()
    const { data } = await query.fetch({ event })
    const { weapons } = data
    return { weapons }
}
