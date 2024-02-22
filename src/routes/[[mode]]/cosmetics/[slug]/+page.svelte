<script>
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import { outfitsGender } from "$lib/stores";
    import Meta from "$components/Meta.svelte";

    export let data;
    const { outfit } = data
    const desc = `${outfit.description} ${outfit.source ? `\n\n***${outfit.source}***` : ""}`
    const icon = outfit.icon.replace(/fashion_f(.+?)\.webp/, `fashion_${$outfitsGender}$1.webp`)
</script>

<Meta
    title="{outfit.name} | Tower of Fantasy Index"
    description="All about the cosmetic {outfit.name} in Tower of Fantasy, such as how to obtain it and a video preview (if available)."
    image={outfit.icon}
/>

<GenericHeader
    h1={outfit.name}
    {icon}
    {desc}
    imgStyle="transform: scale(1.25)"
/>