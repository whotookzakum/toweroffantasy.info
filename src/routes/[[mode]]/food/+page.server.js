import { AllFoodsStore } from '$houdini'
import uniq from "lodash/uniq"
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllFoodsStore()
    const { data } = await query.fetch({ event })
    const { foods } = data

    const allEffects = 
        uniq(foods.flatMap(food => food.categories))
        .map(cat => ({ value: cat, type: "effects", checked: false }))

    return { foods: clean(foods), allEffects: clean(allEffects) }
}
