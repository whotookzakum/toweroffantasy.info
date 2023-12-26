import { MountsStore } from '$houdini'

export const load = async (event) => {
    const query = new MountsStore()
    const { data } = await query.fetch({ event })
    const { mounts } = data
    return { mounts }
}
