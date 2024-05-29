import { AllCosmeticsStore } from '$houdini'
import { clean, processCosmetics } from '$lib/utils.js'

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"
    const { slug } = event.params

    const query = new AllCosmeticsStore()
    const { data } = await query.fetch({
        event,
        variables: {
            version,
            lang,
            avatarFilter: "{\"type\": \"AVATAR\"}",
            frameFilter: "{\"type\": \"FRAME\"}",
            consumableFilter: "{\"type\": \"CONSUMABLE\"}"
        }
    })

    const items = Object.values(processCosmetics(data)).flat().filter(item => item.type === slug)

    return { items: clean(items) }
}
