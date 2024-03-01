import { AllMountsStore } from '$houdini'

export const load = async (event) => {
    const query = new AllMountsStore()
    const { data } = await query.fetch({ event })
    const { mounts } = data
    return { mounts }
}
