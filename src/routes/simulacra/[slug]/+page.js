// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export async function load({ params }) {
    const simulacrum = await import(`../../../lib/data/simulacra/${params.slug}.json`)
    const weapon = await import(`../../../lib/data/weapons/${params.slug}.json`)
    return { 
        ...simulacrum.default, 
        weapon: weapon.default 
    }
}