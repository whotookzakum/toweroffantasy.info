import { AllSimulacraV2Store } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllSimulacraV2Store()
    const { data } = await query.fetch({ event })
    const { simulacraV2 } = data
    return { simulacraV2: clean(simulacraV2) }
}
