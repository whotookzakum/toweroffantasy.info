import { FullServantStore } from '$houdini'

export const load = async (event) => {
    // Servant full data
    const query = new FullServantStore()
    const res = await query.fetch({ event, variables: { id: event.params.slug } })
    const { servant } = res.data

    return { servant }
}