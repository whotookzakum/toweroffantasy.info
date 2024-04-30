import { AllOutfitsStore, AllItemsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = "global" // event.params.mode === "cn" ? "china" : "global"
    const lang = "en" // event.params.mode === "cn" ? "cn" : "en"

    const query = new AllOutfitsStore()
    const { data } = await query.fetch({ event, variables: { version, lang } })
    const outfits = data.outfits.map(item => ({...item, type: item.type === "Headwear" ? "Accessory" : item.type, version, lang}))

    const avatarsQuery = new AllItemsStore()
    const avatarsRes = await avatarsQuery.fetch({ event, variables: { filter: "{\"type\": \"AVATAR\" }", version, lang } })
    const avatars = avatarsRes.data.items

    const framesQuery = new AllItemsStore()
    const framesRes = await framesQuery.fetch({ event, variables: { filter: "{\"type\": \"FRAME\" }", version, lang } })
    const frames = framesRes.data.items

    const consumablesQuery = new AllItemsStore()
    const consumablesRes = await consumablesQuery.fetch({ event, variables: { filter: "{\"type\": \"CONSUMABLE\" }", version, lang } })
    const consumables = consumablesRes.data.items.reduce((items, item) => {
        if (item.id.startsWith("hat_")) {
            items.push({ ...item, type: "Headwear" })
        }
        else if (item.id.includes("chat_")) {
            // chat_horn idk
            // chat_qipao chat bubbles
            // cn_chat_qipao chat bubbles
            // chat_action emotes?
            // chat_emoji emojis
            // chat_dubbing voice packs
            // chat_mia_phrase mia voice pack?
            if (item.id.includes("chat_qipao")) {
                // These don't have icon versions, but they have the full chat bubble image
                if (["chat_qipao_iw_2", "chat_qipao_iw_3", "chat_qipao_iw_4"].includes(item.id)) {
                    item.icon = item.icon.replace("icon_", "")
                }
                items.push({ ...item, type: "Chat Bubble" })
            }
            else if (item.id.includes("chat_emoji")) items.push({ ...item, type: "Emoji" })
        }

        return items
    }, [])




    return { outfits: clean([...outfits, ...avatars, ...frames, ...consumables]) }
}
