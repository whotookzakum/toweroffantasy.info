<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import DBLayout from "../DBLayout.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;

    $: entries = data.mounts.filter((entry) =>
        entry.name?.toLowerCase().includes($searchTerm.toLowerCase()),
    );

    // Alternative logic for isNew: !isRerun && todaysDate < endDate && todaysDate > startDate
</script>

<Meta
    title="Mounts | Tower of Fantasy Index"
    description="Mounts are vehicles that help you traverse terrain more quickly. All mounts move at the same speed. Owning multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels."
    image={entries[0].assets.icon}
/>

<h1>Mounts</h1>
<p>
    Mounts are vehicles that help you traverse terrain more quickly. All mounts
    move at the same speed. Owning multiple mounts can unlock achievements, and
    maintaining mounts will reward you with dark crystals. Some mounts have
    different colors available at certain levels.
</p>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
            isNew={entry.id === data.mounts[0].id}
        />
    {/each}
</ul>
