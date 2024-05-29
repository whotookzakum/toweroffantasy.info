import { FullOutfitStore, FullItemStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const prerender = false
export const ssr = true

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

    let result
    const outfitQuery = new FullOutfitStore()
    const outfitRes = await outfitQuery.fetch({ event, variables: { id: event.params.slug, version, lang } })
    if (outfitRes.data) {
        result = outfitRes.data.outfit
    }
    else {
        const itemQuery = new FullItemStore()
        const itemRes = await itemQuery.fetch({ event, variables: { id: event.params.slug, version, lang } })
        result = itemRes.data.item

        // These don't have icon versions, but they have the full chat bubble image
        if (["chat_qipao_iw_2", "chat_qipao_iw_3", "chat_qipao_iw_4"].includes(result.id)) {
            result.icon = result.icon.replace("icon_", "")
        }
    }

    return { outfit: clean(result) }
}