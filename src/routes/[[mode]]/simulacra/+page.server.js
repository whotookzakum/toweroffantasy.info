import { AllSimulacraV2Store } from '$houdini'

export const load = async (event) => {
    const query = new AllSimulacraV2Store()
    const { data } = await query.fetch({ event })
    const { simulacraV2 } = data
    return { simulacraV2 }
}
