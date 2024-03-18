import { AllMatricesStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    const query = new AllMatricesStore()
    const { data } = await query.fetch({ event })
    const { matrices } = data
    return { matrices: clean(matrices) }
}
