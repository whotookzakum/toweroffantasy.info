import { AllServantsStore } from '$houdini'

export const load = async (event) => {
    const query = new AllServantsStore()
    const { data } = await query.fetch({ event })
    const { servants } = data
    return { servants }
}
