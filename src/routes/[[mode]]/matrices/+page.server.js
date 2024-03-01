import { AllMatricesStore } from '$houdini'

export const load = async (event) => {
    const query = new AllMatricesStore()
    const { data } = await query.fetch({ event })
    const { matrices } = data
    return { matrices }
}
