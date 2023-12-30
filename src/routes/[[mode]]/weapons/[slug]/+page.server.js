import { FullWeaponStore, ShortSimulacrumV2Store, ShortMatrixStore, AllBannersStore, AllSimulacraV2Store } from '$houdini'

export const load = async (event) => {
    // Weapon full data
    const wepQuery = new FullWeaponStore()
    const { data } = await wepQuery.fetch({ event, variables: { id: event.params.slug } })
    const { weapon } = data

    // Simulacrum entry data
    const simQuery = new ShortSimulacrumV2Store()
    const simRes = await simQuery.fetch({ event, variables: { id: weapon.simulacrumId } })
    const { simulacrum_v2 } = simRes.data

    // Matrix entry data
    const matrixQuery = new ShortMatrixStore()
    const matrixRes = await matrixQuery.fetch({ event, variables: { id: simulacrum_v2.matrixId } })
    const { matrix } = matrixRes.data

    // Banners for banner table
    const bannersQuery = new AllBannersStore()
    const bannersRes = await bannersQuery.fetch({ event })

    // All simulacra for avatar image in banner table
    const simulacraStore = new AllSimulacraV2Store()
    const simulacraRes = await simulacraStore.fetch({ event })

    const banners = bannersRes.data.banners.map(banner => ({
        ...banner,
        simulacrum: simulacraRes.data.simulacra_v2.find(sim => sim.id === banner.simulacrumId),
    }))

    return { weapon, simulacrum_v2, matrix, banners }
}