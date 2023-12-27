import { WeaponsStore } from '$houdini'

export const load = async (event) => {
    const query = new WeaponsStore()
    const { data } = await query.fetch({ event })
    const { weapons } = data
    return { weapons }
}
