<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";
    import DBLayout from "../DBLayout.svelte";

    export let data;
    $: ({ Simulacra } = data);
    $: simulacra = $Simulacra?.data?.simulacra_v2;
    // .filter(sim => sim.Name.toLowerCase().includes($searchTerm.toLowerCase()))
</script>

<DBLayout>
    <slot />
    <svelte:fragment slot="search-results">
        {#if !$Simulacra.fetching}
            <!-- <Meta
                title="Simulacra | Tower of Fantasy Index"
                description="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
                image="https://api.toweroffantasy.info{$Simulacra?.data
                    ?.simulacra_v2[0]?.assetsA0?.avatar}"
            /> -->
            {#each simulacra as entry (entry.id)}
                <EntryItem {entry} slot="search-results" />
            {/each}
        {/if}
    </svelte:fragment>
</DBLayout>
