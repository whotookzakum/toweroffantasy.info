import { AllWeaponsStore, AllSimulacraV2Store, AllMatricesStore } from '$houdini'

export const load = async (event) => {
    const weaponsStore = new AllWeaponsStore()
    const simulacraStore = new AllSimulacraV2Store()
    const matricesStore = new AllMatricesStore()

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