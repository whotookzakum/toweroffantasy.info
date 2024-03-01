import { AllRelicsStore } from '$houdini'

export const load = async (event) => {
    const query = new AllRelicsStore()
    const { data } = await query.fetch({ event })
    const { relics } = data
    return { relics }
}
