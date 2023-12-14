<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import MatrixEntryItem from "../MatrixEntryItem.svelte";
    import DBLayout from "../DBLayout.svelte";

    export let data;
    $: ({ Matrices } = data);
    $: matrices = $Matrices?.data?.matrices;
    // .filter(mat => mat.name.toLowerCase().includes($searchTerm.toLowerCase()))
</script>

<DBLayout>
    <slot />
    <svelte:fragment slot="search-results">
        {#if !$Matrices.fetching}
            <Meta
                title="Matrices | Tower of Fantasy Index"
                description="Matrices (aka Chips) are items that can be attached to one of the four weapon slots (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
                image="https://api.toweroffantasy.info{$Matrices?.data
                    ?.matrices[0]?.assets?.iconLarge}"
            />
            {#each matrices as entry (entry.id)}
                <MatrixEntryItem {entry} />
            {/each}
        {/if}
    </svelte:fragment>
</DBLayout>
