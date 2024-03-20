import { AllOutfitsStore, AllItemsStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllOutfitsStore()
    const { data } = await query.fetch({ event })
    const outfits = data.outfits.map(item => ({...item, type: item.type === "Headwear" ? "Accessory" : item.type}))

    const avatarsQuery = new AllItemsStore()
    const avatarsRes = await avatarsQuery.fetch({ event, variables: { filter: "{\"type\": \"AVATAR\" }" } })
    const avatars = avatarsRes.data.items

    const framesQuery = new AllItemsStore()
    const framesRes = await framesQuery.fetch({ event, variables: { filter: "{\"type\": \"FRAME\" }" } })
    const frames = framesRes.data.items

    const consumablesQuery = new AllItemsStore()
    const consumablesRes = await consumablesQuery.fetch({ event, variables: { filter: "{\"type\": \"CONSUMABLE\" }" } })
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
            if (item.id.includes("chat_qipao")) items.push({ ...item, type: "Chat Bubble" })
            else if (item.id.includes("chat_emoji")) items.push({ ...item, type: "Emoji" })
        }

        return items
    }, [])




    return { outfits: clean([...outfits, ...avatars, ...frames, ...consumables]) }
}
