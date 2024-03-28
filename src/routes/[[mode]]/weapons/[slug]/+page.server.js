import { FullWeaponStore, FullSimulacrumV2Store, ShortMatrixStore, AllBannersStore, AllSimulacraV2Store, AllWeaponsStore, AllMatricesStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en"

    // Weapon full data
    const wepQuery = new FullWeaponStore()
    const { data } = await wepQuery.fetch({ event, variables: { id: event.params.slug, version, lang } })
    const { weapon } = data

    let simulacrumV2, matrix;
    // Simulacrum entry data
    if (weapon.simulacrumId) {
        const simQuery = new FullSimulacrumV2Store()
        const simRes = await simQuery.fetch({ event, variables: { id: weapon.simulacrumId, version, lang } })
        simulacrumV2 = simRes.data.simulacrumV2
    }

    // Matrix entry data
    if (simulacrumV2?.matrixId) {
        const matrixQuery = new ShortMatrixStore()
        const matrixRes = await matrixQuery.fetch({ event, variables: { id: simulacrumV2.matrixId, version, lang } })
        matrix = matrixRes.data.matrix
    }

    // Banners for banner table
    const bannersQuery = new AllBannersStore()
    const bannersRes = await bannersQuery.fetch({ event, variables: { version, lang } })

    // All simulacra for avatar image in banner table
    const allSimsStore = new AllSimulacraV2Store()
    const allSimsRes = await allSimsStore.fetch({ event, variables: { version, lang } })

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

    // Weapon meta (recommended matrices, recommended weapon pairings)
    const allWepsQuery = new AllWeaponsStore()
    const allWepsRes = await allWepsQuery.fetch({ event, variables: { version, lang } })

    const recommendedPairings = weapon.meta.recommendedPairings.map(pairingId => allWepsRes.data.weapons.find(w => w.id === pairingId))

    const allMatricesQuery = new AllMatricesStore()
    const allMatricesRes = await allMatricesQuery.fetch({ event, variables: { version, lang } })

    const recommendedMatrices = weapon.meta.recommendedMatrices.map(recMatrix => {
        const matrixData = allMatricesRes.data.matrices.find(w => w.id === recMatrix.id)
        return {
            ...recMatrix,
            ...matrixData
        }
    })

    return {
        weapon: {
            ...clean(weapon),
            meta: {
                ...clean(weapon.meta),
                recommendedPairings: clean(recommendedPairings),
                recommendedMatrices: clean(recommendedMatrices)
            }
        },
        simulacrumV2: clean(simulacrumV2),
        matrix: clean(matrix),
        banners: clean(banners)
    }
}
