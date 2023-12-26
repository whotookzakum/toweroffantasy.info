export const load = async ({ params }) => {
    const mount = await import(`../../../lib/data/mounts/${params.slug}.json`)
    return { ...mount }
}