export const load = async ({ fetch }) => {
    const response = await fetch(`/api/matrices`)
    const items = await response.json()

    return {
        items
    }
}