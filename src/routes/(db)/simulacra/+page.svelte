<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import DBLayout from "../DBLayout.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: entries = data.simulacra_v2.filter((entry) =>
        entry.name.toLowerCase().includes($searchTerm.toLowerCase()),
    );
</script>

<DBLayout>
    <svelte:fragment slot="search-results">
        <Meta
            title="Simulacra | Tower of Fantasy Index"
            description="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
            image={entries[0].assetsA0.avatar}
        />
        {#each entries as entry (entry.id)}
            <EntryItem
                {entry}
                slot="search-results"
                isNew={entry.id === data.simulacra_v2[0].id}
            />
        {/each}
    </svelte:fragment>
</DBLayout>
