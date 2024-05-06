import { AllBannersStore, AllSimulacraV2Store } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en" // event.params.mode === "cn" ? "cn" : "en"

    const bannersStore = new AllBannersStore()
    const bannersRes = await bannersStore.fetch({ event, variables: { version } })

    const simulacraStore = new AllSimulacraV2Store()
    const simulacraRes = await simulacraStore.fetch({ event, variables: { version, lang } })

    const banners = bannersRes.data.banners.map(banner => ({
        ...banner,
        endDate: banner.endDate,
        startDate: banner.startDate,
        totalBanners: bannersRes.data.banners.filter(
            (b) => b.simulacrumId === banner.simulacrumId,
        ).length,
        simulacrum: simulacraRes.data.simulacraV2.find(sim => sim.id === banner.simulacrumId)
    }))

    return { banners: clean(banners) }
}
