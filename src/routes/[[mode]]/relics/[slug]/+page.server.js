import { FullRelicStore } from '$houdini'

export const load = async (event) => {
    // Relic full data
    const relicQuery = new FullRelicStore()
    const relicRes = await relicQuery.fetch({ event, variables: { id: event.params.slug } })
    const { relic } = relicRes.data

    return { relic }
}