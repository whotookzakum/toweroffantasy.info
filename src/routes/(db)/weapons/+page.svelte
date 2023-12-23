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

<DBLayout>
    <svelte:fragment slot="search-results">
        <Meta
            title="Weapons | Tower of Fantasy Index"
            description=""
            image="https://api.toweroffantasy.info{entries[0].assets.icon}"
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
