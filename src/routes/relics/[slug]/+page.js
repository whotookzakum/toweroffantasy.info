export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/relics/${params.slug}`)
    const relic = await response.json()
    return relic
}