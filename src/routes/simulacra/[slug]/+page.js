// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export async function load({ params }) {
    const response = await fetch(`/api/simulacra`)
    const allSimulacra = await response.json()
    const simulacrumData = allSimulacra.find(s => s.name.replace(' ', '-').toLowerCase() === params.slug)

    return simulacrumData
}