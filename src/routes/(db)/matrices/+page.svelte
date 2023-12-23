<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import DBLayout from "../DBLayout.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: entries = data.matrices.filter((entry) =>
        entry.name.toLowerCase().includes($searchTerm.toLowerCase()),
    );
</script>

<DBLayout>
    <svelte:fragment slot="search-results">
        <Meta
            title="Matrices | Tower of Fantasy Index"
            description="Matrices (aka Chips) are items that can be attached to one of the four weapon slots (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
            image="https://api.toweroffantasy.info{entries[0].assets.iconLarge}"
        />
        {#each entries as entry (entry.id)}
            <EntryItem
                {entry}
                slot="search-results"
                isNew={entry.id === entries[0].id}
            />
        {/each}
    </svelte:fragment>
</DBLayout>
