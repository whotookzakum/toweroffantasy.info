import { ShortWeaponStore, FullSimulacrumV2Store, ShortMatrixStore, AllBannersStore, AllSimulacraV2Store, AllItemsStore } from '$houdini'

export const load = async (event) => {
    // Simulacrum full data
    const simQuery = new FullSimulacrumV2Store()
    const simRes = await simQuery.fetch({ event, variables: { id: event.params.slug } })
    const { simulacrumV2 } = simRes.data

    // Weapon for related links
    const wepQuery = new ShortWeaponStore()
    const { data } = await wepQuery.fetch({ event, variables: { id: simulacrumV2.weaponId } })
    const { weapon } = data

    // Matrix for related links
    const matrixQuery = new ShortMatrixStore()
    const matrixRes = await matrixQuery.fetch({ event, variables: { id: simulacrumV2.matrixId } })
    const { matrix } = matrixRes.data

    // Banners for banner table
    const bannersQuery = new AllBannersStore()
    const bannersRes = await bannersQuery.fetch({ event })

    // All simulacra for avatar image in banner table
    const allSimsStore = new AllSimulacraV2Store()
    const allSimsRes = await allSimsStore.fetch({ event })

    const banners = bannersRes.data.banners.map(banner => {
        const simulacrum = allSimsRes.data.simulacraV2.find(sim => sim.id === banner.simulacrumId)
        return {
            ...banner,
            simulacrum: {
                assetsA0: {
                    avatar: simulacrum?.assetsA0.avatar ?? "/images/mia.webp"
                }
            }
        }
    })

    // const itemsQuery = new AllItemsStore()
    // const itemsRes = await itemsQuery.fetch({ event })
    // const { items } = itemsRes.data
    // console.log(items.length)

    return { weapon, simulacrumV2, matrix, banners }
}