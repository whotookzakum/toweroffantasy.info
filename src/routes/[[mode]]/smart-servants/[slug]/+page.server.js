import { FullServantStore } from '$houdini'
import { clean } from '$lib/utils.js'

export const load = async (event) => {
    // Servant full data
    const query = new FullServantStore()
    const res = await query.fetch({ event, variables: { id: event.params.slug } })
    const { servant } = res.data

    return { servant: clean(servant) }
}