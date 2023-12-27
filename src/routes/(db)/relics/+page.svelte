<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import DBLayout from "../DBLayout.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;

    $: entries = data.relics.filter((entry) =>
        entry.name?.toLowerCase().includes($searchTerm.toLowerCase()) && entry.type !== "ITEM_TYPE_BREAK_FATE_ARTIFACT",
    );

    // Alternative logic for isNew: !isRerun && todaysDate < endDate && todaysDate > startDate
</script>

<DBLayout>
    <svelte:fragment slot="search-results">
        <Meta
            title="Relics | Tower of Fantasy Index"
            description="Relics (aka Gadgets) are tools that aid the player in exploration or combat."
            image={entries[0].icon}
        />
        {#each entries as entry (entry.id)}
            <EntryItem
                {entry}
                slot="search-results"
                isNew={entry.id === data.relics[0].id}
            />
        {/each}
    </svelte:fragment>
</DBLayout>
