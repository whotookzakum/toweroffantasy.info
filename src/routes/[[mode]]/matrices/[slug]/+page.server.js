import { ShortWeaponStore, ShortSimulacrumV2Store, FullMatrixStore, AllBannersStore, AllSimulacraV2Store, AllWeaponsStore, AllMatricesStore } from '$houdini'

export const load = async (event) => {
    // Matrix full data
    const matrixQuery = new FullMatrixStore()
    const matrixRes = await matrixQuery.fetch({ event, variables: { id: event.params.slug } })
    const { matrix } = matrixRes.data

    let simulacrum_v2, weapon;

    // Simulacrum entry data
    if (matrix.simulacrumId) {
        const simQuery = new ShortSimulacrumV2Store()
        const simRes = await simQuery.fetch({ event, variables: { id: matrix.simulacrumId } })
        simulacrum_v2 = simRes.data.simulacrum_v2
    }

    // Weapon entry data
    if (simulacrum_v2?.weaponId) {
        const wepQuery = new ShortWeaponStore()
        const { data } = await wepQuery.fetch({ event, variables: { id: simulacrum_v2.weaponId } })
        weapon = data.weapon
    }

    // Banners for banner table
    const bannersQuery = new AllBannersStore()
    const bannersRes = await bannersQuery.fetch({ event })

    // All simulacra for avatar image in banner table
    const allSimsStore = new AllSimulacraV2Store()
    const allSimsRes = await allSimsStore.fetch({ event })

    const banners = bannersRes.data.banners.map(banner => {
        const simulacrum = allSimsRes.data.simulacra_v2.find(sim => sim.id === banner.simulacrumId)
        return {
            ...banner,
            simulacrum: {
                assetsA0: {
                    avatar: simulacrum?.assetsA0.avatar ?? "/images/mia.webp"
                }
            }
        }
    })

    // Matrix meta (recommended weapon pairings)
    const allWepsStore = new AllWeaponsStore()
    const allWepsRes = await allWepsStore.fetch({ event })
    const recommendedWeapons = matrix.meta.recommendedWeapons.map(pairingId => allWepsRes.data.weapons.find(w => w.id === pairingId))

    return {
        weapon,
        simulacrum_v2,
        matrix: {
            ...matrix,
            meta: {
                ...matrix.meta,
                recommendedWeapons,
            }
        },
        banners
    }
}
