export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/mounts/${params.slug}`)
    const relic = await response.json()
    return relic
}