import { AllSimulacraV2Store } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en"

    const query = new AllSimulacraV2Store()
    const { data } = await query.fetch({ event, variables: { version, lang } })
    const { simulacraV2 } = data
    return { simulacraV2: clean(simulacraV2) }
}
