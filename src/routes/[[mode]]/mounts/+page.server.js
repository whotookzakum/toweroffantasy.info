import { AllMountsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

    const query = new AllMountsStore()
    const { data } = await query.fetch({ event, variables: { version, lang } })
    const { mounts } = data
    return { mounts: clean(mounts) }
}
