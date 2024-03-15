import { AllEquipmentsStore } from '$houdini'

export const load = async (event) => {
    const query = new AllEquipmentsStore()
    const { data } = await query.fetch({ event })
    const { gears } = data
    return { gears }
}
