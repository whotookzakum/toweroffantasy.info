import { WeaponsStore, SimulacraV2Store, MatricesStore } from '$houdini'

export const load = async (event) => {
    const weaponsStore = new WeaponsStore()
    const simulacraStore = new SimulacraV2Store()
    const matricesStore = new MatricesStore()

    const weaponsRes = await weaponsStore.fetch({ event })
    const simulacraRes = await simulacraStore.fetch({ event })
    const matricesRes = await matricesStore.fetch({ event })

    const newest = {
        simulacrum: simulacraRes.data.simulacra_v2[0],
        weapon: weaponsRes.data.weapons[0],
        matrix: matricesRes.data.matrices[0]
    }
    
    return { newest }
}


// export const _EntriesVariables = ({ url }) => {
//     return {
//         lang: url.searchParams.get("lang") || "en"
//     }
// }