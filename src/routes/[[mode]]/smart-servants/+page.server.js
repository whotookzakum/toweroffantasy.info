import { AllServantsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en"

    const query = new AllServantsStore()
    const { data } = await query.fetch({ event, variables: { version, lang } })
    const { servants } = data
    return { servants: clean(servants) }
}
