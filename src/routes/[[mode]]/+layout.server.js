import { AllSimulacraV2Store } from '$houdini'
import { getLatestVersion } from '$lib/utils.js'

export const prerender = true

export const load = async (event) => {
    const query = new AllSimulacraV2Store()
    const { data } = await query.fetch({ event })
    const { simulacra_v2 } = data
    const bgImg = simulacra_v2[0].assetsA0.titlePicture
    return { bgImg, latestVersion: getLatestVersion() }
}
