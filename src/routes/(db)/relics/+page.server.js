import { RelicsStore } from '$houdini'

export const load = async (event) => {
    const query = new RelicsStore()
    const { data } = await query.fetch({ event })
    const { relics } = data
    return { relics }
}
