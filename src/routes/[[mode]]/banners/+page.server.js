import { AllBannersStore, AllSimulacraV2Store } from '$houdini'

export const load = async (event) => {
    const bannersStore = new AllBannersStore()
    const bannersRes = await bannersStore.fetch({ event })

    const simulacraStore = new AllSimulacraV2Store()
    const simulacraRes = await simulacraStore.fetch({ event })

    const banners = bannersRes.data.banners.map(banner => ({
        ...banner,
        endDate: banner.endDate + " UTC",
        startDate: banner.startDate + " UTC",
        totalBanners: bannersRes.data.banners.filter(
            (b) => b.simulacrumId === banner.simulacrumId,
        ).length,
        simulacrum: simulacraRes.data.simulacraV2.find(sim => sim.id === banner.simulacrumId)
    }))

    return { banners }
}
