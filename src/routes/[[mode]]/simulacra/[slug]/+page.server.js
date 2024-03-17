import { ShortWeaponStore, FullSimulacrumV2Store, ShortMatrixStore, AllBannersStore, AllSimulacraV2Store, AllItemsStore } from '$houdini'
import lodash from 'lodash';
import deepdash from 'deepdash-es';
const _ = deepdash(lodash);

export const load = async (event) => {
    // Simulacrum full data
    const simQuery = new FullSimulacrumV2Store()
    const simRes = await simQuery.fetch({ event, variables: { id: event.params.slug } })
    const { simulacrumV2 } = simRes.data

    // Weapon for related links
    const wepQuery = new ShortWeaponStore()
    const { data } = await wepQuery.fetch({ event, variables: { id: simulacrumV2.weaponId } })
    const { weapon } = data

    // Matrix for related links
    const matrixQuery = new ShortMatrixStore()
    const matrixRes = await matrixQuery.fetch({ event, variables: { id: simulacrumV2.matrixId } })
    const { matrix } = matrixRes.data

    // Banners for banner table
    const bannersQuery = new AllBannersStore()
    const bannersRes = await bannersQuery.fetch({ event })

    // All simulacra for avatar image in banner table
    const allSimsStore = new AllSimulacraV2Store()
    const allSimsRes = await allSimsStore.fetch({ event })

    const banners = bannersRes.data.banners.map(banner => {
        const simulacrum = allSimsRes.data.simulacraV2.find(sim => sim.id === banner.simulacrumId)
        return {
            ...banner,
            simulacrum: {
                assetsA0: {
                    avatar: simulacrum?.assetsA0.avatar ?? "/images/mia.webp"
                }
            }
        }
    })

    const itemsQuery = new AllItemsStore()
    const itemsRes = await itemsQuery.fetch({ event, variables: { filter: "{\"type\": \"GIFT\" }" } })
    const { items } = itemsRes.data

    const gifts =
        items
            .filter(item => {
                const isLikedGift = item.giftTags.some(tagObj => simulacrumV2.likedGiftTypes.includes(tagObj.tagId))
                const isDislikedGift = item.giftTags.some(tagObj => simulacrumV2.dislikedGiftTypes.includes(tagObj.tagId))
                return isLikedGift && !isDislikedGift
            })
            .map(item => {
                const totalMatches = item.giftTags.reduce((acc, curr) => {
                    if (simulacrumV2.likedGiftTypes.includes(curr.tagId)) acc++;
                    return acc;
                }, 0)

                // Rarity 2~4: Points for 0~3 matches 
                const points = {
                    "2": [10, 15, 20, 25],
                    "3": [20, 30, 40, 50],
                    "4": [40, 60, 80, 100]
                }

                return { ...item, amount: `+${points[item.rarity][totalMatches]}` }
            })
            .sort((a, b) => b.amount - a.amount)

    const hi = _.mapValuesDeep(simulacrumV2,
        (v) => {
            if (typeof v === "string") return v.replace("https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp", "ALALALALALAL")
            return v
        },
        { leavesOnly: true }
    );
    console.log(hi)

    return { weapon, simulacrumV2, matrix, gifts, banners }
}