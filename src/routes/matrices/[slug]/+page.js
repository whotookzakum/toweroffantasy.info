export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/matrices/${params.slug}`)
    const matrix = await response.json()
    return matrix
}