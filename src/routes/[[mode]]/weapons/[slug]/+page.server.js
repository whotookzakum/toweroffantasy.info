import { FullWeaponStore, ShortSimulacrumV2Store, ShortMatrixStore, AllBannersStore, AllSimulacraV2Store, AllWeaponsStore, AllMatricesStore } from '$houdini'

export const load = async (event) => {
    // Weapon full data
    const wepQuery = new FullWeaponStore()
    const { data } = await wepQuery.fetch({ event, variables: { id: event.params.slug } })
    const { weapon } = data

    let simulacrum_v2, matrix;
    // Simulacrum entry data
    if (weapon.simulacrumId) {
        const simQuery = new ShortSimulacrumV2Store()
        const simRes = await simQuery.fetch({ event, variables: { id: weapon.simulacrumId } })
        simulacrum_v2 = simRes.data.simulacrum_v2
    }

    // Matrix entry data
    if (simulacrum_v2?.matrixId) {
        const matrixQuery = new ShortMatrixStore()
        const matrixRes = await matrixQuery.fetch({ event, variables: { id: simulacrum_v2.matrixId } })
        matrix = matrixRes.data.matrix
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

    // Weapon meta (recommended matrices, recommended weapon pairings)
    const allWepsQuery = new AllWeaponsStore()
    const allWepsRes = await allWepsQuery.fetch({ event })

    const recommendedPairings = weapon.meta.recommendedPairings.map(pairingId => allWepsRes.data.weapons.find(w => w.id === pairingId))

    const allMatricesQuery = new AllMatricesStore()
    const allMatricesRes = await allMatricesQuery.fetch({ event })

    const recommendedMatrices = weapon.meta.recommendedMatrices.map(recMatrix => {
        const matrixData = allMatricesRes.data.matrices.find(w => w.id === recMatrix.id)
        return {
            ...recMatrix,
            ...matrixData
        }
    })

    return {
        weapon: {
            ...weapon,
            meta: {
                ...weapon.meta,
                recommendedPairings,
                recommendedMatrices
            }
        },
        simulacrum_v2,
        matrix,
        banners
    }
}
