import { SimulacraV2Store } from '$houdini'

export const load = async (event) => {
    const query = new SimulacraV2Store()
    const { data } = await query.fetch({ event })
    const { simulacra_v2 } = data
    return { simulacra_v2 }
}
