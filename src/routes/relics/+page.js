export const load = async ({ fetch }) => {
    const response = await fetch(`/api/relics`)
    const items = await response.json()

    return {
        items
    }
}