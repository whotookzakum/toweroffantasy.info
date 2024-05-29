import { AllCosmeticsStore } from '$houdini'
import { clean, processCosmetics } from '$lib/utils.js'
import uniqBy from "lodash/uniqBy.js"

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

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

    const allCosmetics = Object.values(processCosmetics(data)).flat()

    const cosmetics = uniqBy(allCosmetics, item => item.type).map(item => ({ ...item, name: item.type, id: item.type }))

    return { cosmetics: clean(cosmetics) }
}
