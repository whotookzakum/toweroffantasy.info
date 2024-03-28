import { AllGuidebooksStore } from '$houdini'
import uniqBy from "lodash/uniqBy.js"
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en"

    const query = new AllGuidebooksStore()
    const { data } = await query.fetch({ event, variables: { version, lang } })
    const { guidebooks } = data

    // "Bow with folded hands" has duplicates
    const exploration = uniqBy(
        guidebooks
            .filter(guide => guide.menuId === "worldexplore")
            .flatMap(guide => guide.items).reverse(),
        item => item.title + item.description
    )

    const monsters = uniqBy(
        guidebooks
            .filter(guide => guide.menuId === "monster")
            .flatMap(guide => guide.items).reverse(),
        item => item.title + item.description
    )

    return { exploration: clean(exploration), monsters: clean(monsters) }
}
