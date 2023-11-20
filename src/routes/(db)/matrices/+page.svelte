<script>
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: ({ AllMatrices } = data);
</script>

{#if !$AllMatrices.fetching}
    <Meta
        title="Matrices | Tower of Fantasy Index"
        description="Matrices (aka Chips) are items that can be attached to one of the four weapon slots (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
        image="https://api.toweroffantasy.info{$AllMatrices.data.matrices[0]
            .assets.iconLarge}"
    />
    {#each $AllMatrices.data.matrices as entry}
        <EntryItem {entry} />
    {/each}
{/if}
