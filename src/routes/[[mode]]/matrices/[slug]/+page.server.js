import { ShortWeaponStore, ShortSimulacrumV2Store, FullMatrixStore, AllBannersStore, AllSimulacraV2Store, AllWeaponsStore, AllMatricesStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en"

    // Matrix full data
    const matrixQuery = new FullMatrixStore()
    const matrixRes = await matrixQuery.fetch({ event, variables: { id: event.params.slug, version, lang } })
    const { matrix } = matrixRes.data

    let simulacrumV2, weapon;

    // Simulacrum entry data
    if (matrix.simulacrumId) {
        const simQuery = new ShortSimulacrumV2Store()
        const simRes = await simQuery.fetch({ event, variables: { id: matrix.simulacrumId, version, lang } })
        simulacrumV2 = simRes.data.simulacrumV2
    }

    // Weapon entry data
    if (simulacrumV2?.weaponId) {
        const wepQuery = new ShortWeaponStore()
        const { data } = await wepQuery.fetch({ event, variables: { id: simulacrumV2.weaponId, version, lang } })
        weapon = data.weapon
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

    // Matrix meta (recommended weapon pairings)
    const allWepsStore = new AllWeaponsStore()
    const allWepsRes = await allWepsStore.fetch({ event, variables: { version, lang } })
    const recommendedWeapons = matrix.meta.recommendedWeapons.map(pairingId => allWepsRes.data.weapons.find(w => w.id === pairingId))

    return {
        weapon: clean(weapon),
        simulacrumV2: clean(simulacrumV2),
        matrix: {
            ...clean(matrix),
            meta: {
                ...clean(matrix.meta),
                recommendedWeapons: clean(recommendedWeapons),
            }
        },
        banners: clean(banners)
    }
}
