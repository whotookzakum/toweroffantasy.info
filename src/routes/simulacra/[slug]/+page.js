// // https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/simulacra/${params.slug}`)
    const simulacrum = await response.json()
    return simulacrum
}