export const load = async ({ params }) => {
    const relic = await import(`../../../lib/data/relics/${params.slug}.json`)
    return { ...relic }
}