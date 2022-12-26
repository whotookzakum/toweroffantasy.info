export const load = async ({ fetch }) => {
    const responseCn = await fetch(`/api/banners/cn`)
    const responseGlob = await fetch(`/api/banners/glob`)
    const cn = await responseCn.json()
    const glob = await responseGlob.json()

    return {
        cn, 
        glob
    }
}