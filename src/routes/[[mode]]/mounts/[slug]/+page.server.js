import { FullMountStore } from '$houdini'

export const load = async (event) => {
    // Mount full data
    const mountQuery = new FullMountStore()
    const mountRes = await mountQuery.fetch({ event, variables: { id: event.params.slug } })
    const { mount } = mountRes.data

    return { mount }
}