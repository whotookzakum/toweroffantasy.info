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

<Meta
    title="Matrices | Tower of Fantasy Index"
    description="Matrices (aka Chips) are items that can be attached to one of four slots on a weapon (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
    image={entries[0].assets.iconLarge}
/>

<h1>Matrices</h1>
<p>
    Matrices (aka Chips) are items that can be attached to one of four slots on
    a weapon (Emotion, Mind, Belief, and Memory) to provide stat boosts and
    special effects.
</p>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
            isNew={entry.id === data.matrices[0].id}
        />
    {/each}
</ul>
