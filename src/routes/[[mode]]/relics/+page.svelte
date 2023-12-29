<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";

    export let data;

    $: entries = data.relics.filter(
        (entry) =>
            entry.name?.toLowerCase().includes($searchTerm.toLowerCase())
    );
</script>

<Meta
    title="Relics | Tower of Fantasy Index"
    description="Relics (aka Gadgets) are tools that aid the player in exploration or combat."
    image={entries[0].icon}
/>

<h1>Relics</h1>
<p>
    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
</p>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
            isNew={entry.id === data.relics[0].id}
        />
    {/each}
</ul>
