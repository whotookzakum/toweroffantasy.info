import { WeaponStore, SimulacrumV2Store, MatrixStore } from '$houdini'

export const load = async (event) => {
    // Weapon full data
    const wepQuery = new WeaponStore()
    const { data } = await wepQuery.fetch({ event, variables: { id: event.params.slug } })
    const { weapon } = data

    // Simulacrum entry data
    const simQuery = new SimulacrumV2Store()
    const simRes = await simQuery.fetch({ event, variables: { id: weapon.simulacrumId } })
    const { simulacrum_v2 } = simRes.data

    // Matrix entry data
    const matrixQuery = new MatrixStore()
    const matrixRes = await matrixQuery.fetch({ event, variables: { id: simulacrum_v2.matrixId } })
    const { matrix } = matrixRes.data

    return { weapon, simulacrum_v2, matrix }
}