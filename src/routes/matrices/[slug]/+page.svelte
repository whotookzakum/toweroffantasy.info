<script>
    import Advancements from "$lib/components/simulacrum/Advancements.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
</script>

<SectionNavigation />

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    {data.rarity} Matrices
</span>