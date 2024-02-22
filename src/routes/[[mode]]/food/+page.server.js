import { AllFoodsStore, AllItemsStore } from '$houdini'
import uniq from "lodash/uniq"

export const load = async (event) => {
    const query = new AllFoodsStore()
    const { data } = await query.fetch({ event })
    const { foods } = data

    // Contains ingredients
    const itemsQuery = new AllItemsStore()
    const itemsRes = await itemsQuery.fetch({ event })
    const { items } = itemsRes.data

    const allEffects = 
        uniq(foods.flatMap(food => food.categories))
        .map(cat => ({ name: cat, type: "effects" }))

    return { foods, items, allEffects }
}
