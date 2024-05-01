import { FullRelicStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en"

    // Relic full data
    const relicQuery = new FullRelicStore()
    const relicRes = await relicQuery.fetch({ event, variables: { id: event.params.slug, version, lang } })
    const { relic } = relicRes.data

    return { relic: clean(relic) }
}