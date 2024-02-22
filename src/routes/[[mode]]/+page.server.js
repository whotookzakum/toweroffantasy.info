import { AllWeaponsStore, AllSimulacraV2Store, AllMatricesStore, AllRelicsStore, AllMountsStore, ShortSimulacrumV2Store } from '$houdini'
import { getLatestVersion } from '$lib/utils.js'
import { DateTime } from "luxon"

export const load = async (event) => {
    const latestVersion = await getLatestVersion()

    const weaponsStore = new AllWeaponsStore()
    const weaponsRes = await weaponsStore.fetch({ event })

    const simulacraStore = new AllSimulacraV2Store()
    const simulacraRes = await simulacraStore.fetch({ event })

    const matricesStore = new AllMatricesStore()
    const matricesRes = await matricesStore.fetch({ event })

    const relicsStore = new AllRelicsStore()
    const relicsRes = await relicsStore.fetch({ event })

    const mountsStore = new AllMountsStore()
    const mountsRes = await mountsStore.fetch({ event })

    const newestAdditions = [
        ...simulacraRes.data.simulacra_v2, 
        ...weaponsRes.data.weapons,
        ...matricesRes.data.matrices,
        ...relicsRes.data.relics,
        ...mountsRes.data.mounts
    ]
    .filter(i => i.version == latestVersion)
    // Filter out banners that have ended or not yet started
    // .filter(i => {
    //     if (!i.banners) return true
    //     const start = i.banners[0].startDate.split(/[\/: ]+/).map(i => parseInt(i))
    //     const startDateTime = DateTime.utc(start[0], start[1], start[2], start[3], start[4], 0).toUnixInteger()

    //     const end = i.banners[0].endDate.split(/[\/: ]+/).map(i => parseInt(i))
    //     const endDateTime = DateTime.utc(end[0], end[1], end[2], end[3], end[4], 0).toUnixInteger()

    //     const now = DateTime.utc().toUnixInteger()

    //     return now < endDateTime && now >= startDateTime
    // })
    
    return { newestAdditions }
}


// export const _EntriesVariables = ({ url }) => {
//     return {
//         lang: url.searchParams.get("lang") || "en"
//     }
// }