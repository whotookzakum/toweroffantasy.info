import { ShortWeaponStore, FullSimulacrumV2Store, ShortMatrixStore } from '$houdini'

export const load = async (event) => {
    // Simulacrum full data
    const simQuery = new FullSimulacrumV2Store()
    const simRes = await simQuery.fetch({ event, variables: { id: event.params.slug } })
    const { simulacrum_v2 } = simRes.data

    // Weapon short data
    const wepQuery = new ShortWeaponStore()
    const { data } = await wepQuery.fetch({ event, variables: { id: simulacrum_v2.weaponId } })
    const { weapon } = data

    // Matrix short data
    const matrixQuery = new ShortMatrixStore()
    const matrixRes = await matrixQuery.fetch({ event, variables: { id: simulacrum_v2.matrixId } })
    const { matrix } = matrixRes.data

    return { weapon, simulacrum_v2, matrix }
}