import { MatricesStore } from '$houdini'

export const load = async (event) => {
    const query = new MatricesStore()
    const { data } = await query.fetch({ event })
    const { matrices } = data
    return { matrices }
}
