import { FullServantStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

    // Servant full data
    const query = new FullServantStore()
    const res = await query.fetch({ event, variables: { id: event.params.slug, version, lang } })
    const { servant } = res.data

    return { servant: clean(servant) }
}