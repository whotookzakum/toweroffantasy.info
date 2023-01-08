export const load = async ({ fetch }) => {
    const response = await fetch(`/api/simulacra`)
    const items = await response.json()

    return {
        items
    }
}