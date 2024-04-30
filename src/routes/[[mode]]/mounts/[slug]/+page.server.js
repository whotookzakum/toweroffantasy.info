import { FullMountStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

    // Mount full data
    const mountQuery = new FullMountStore()
    const mountRes = await mountQuery.fetch({ event, variables: { id: event.params.slug, version, lang } })
    const { mount } = mountRes.data

    return { mount: clean(mount) }
}