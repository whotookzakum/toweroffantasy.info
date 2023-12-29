import { BannersStore, SimulacraV2Store } from '$houdini'

export const load = async (event) => {
    const bannersStore = new BannersStore()
    const bannersRes = await bannersStore.fetch({ event })

    const simulacraStore = new SimulacraV2Store()
    const simulacraRes = await simulacraStore.fetch({ event })

    const banners = bannersRes.data.banners.map(banner => ({
        ...banner,
        endDate: banner.endDate + " UTC",
        startDate: banner.startDate + " UTC",
        totalBanners: bannersRes.data.banners.filter(
            (b) => b.simulacrumId === banner.simulacrumId,
        ).length,
        simulacrum: simulacraRes.data.simulacra_v2.find(sim => sim.id === banner.simulacrumId),
        isNew: banner.simulacrumId === simulacraRes.data.simulacra_v2[0].id
    }))

    return { banners }
}
