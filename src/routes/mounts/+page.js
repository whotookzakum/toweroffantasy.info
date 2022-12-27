export const load = async ({ fetch }) => {
    const response = await fetch(`/api/mounts`)
    const items = await response.json()

    return {
        items
    }
}