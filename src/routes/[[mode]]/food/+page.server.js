import { AllFoodsStore } from '$houdini'
import uniq from "lodash/uniq"

export const load = async (event) => {
    const query = new AllFoodsStore()
    const { data } = await query.fetch({ event })
    const { foods } = data

    const allEffects = 
        uniq(foods.flatMap(food => food.categories))
        .map(cat => ({ name: cat, type: "effects" }))

    return { foods, allEffects }
}
