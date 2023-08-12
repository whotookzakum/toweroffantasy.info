export const load = async ({ params }) => {
    const relic = await import(`../../../lib/data/smart-servants/${params.slug}.json`)
    return { ...relic }
}