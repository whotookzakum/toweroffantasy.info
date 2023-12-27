<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import DBLayout from "../DBLayout.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: entries = data.weapons.filter((entry) =>
        entry.name.toLowerCase().includes($searchTerm.toLowerCase()),
    );

    // Alternative logic for isNew: !isRerun && todaysDate < endDate && todaysDate > startDate
</script>

<Meta
    title="Weapons | Tower of Fantasy Index"
    description="Up to 3 weapons can be equipped at a time in Tower of Fantasy. The player can make use of various weapon elements and skills to increase their effectiveness in combat. Most weapons have an associated Simulacrum and Matrices."
    image={entries[0].assets.icon}
/>

<h1>Weapons</h1>
<p>
    Up to 3 weapons can be equipped at a time in Tower of Fantasy. The player
    can make use of various weapon elements and skills to increase their
    effectiveness in combat. Most weapons have an associated Simulacrum and
    Matrices.
</p>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
            isNew={entry.id === data.weapons[0].id}
        />
    {/each}
</ul>
