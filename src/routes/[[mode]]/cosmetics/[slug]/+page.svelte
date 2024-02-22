<script>
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import { outfitsGender } from "$lib/stores";

    export let data;
    const { outfit } = data
    const desc = `${outfit.description} ${outfit.source ? `\n\n***${outfit.source}***` : ""}`
    const icon = outfit.icon.replace(/fashion_f(.+?)\.webp/, `fashion_${$outfitsGender}$1.webp`)
</script>

<GenericHeader
    h1={outfit.name}
    {icon}
    {desc}
    imgStyle="transform: scale(1.25)"
/>