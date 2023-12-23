import { NewestSimStore } from '$houdini'

export const prerender = true

export const load = async (event) => {
    const query = new NewestSimStore()
    const { data } = await query.fetch({ event })
    const { simulacra } = data
    const bgImg = simulacra[0].assetsA0.titlePicture
    return { bgImg }
}
