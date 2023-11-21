<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: ({ AllSimulacra } = data);
    $: simulacra = $AllSimulacra?.data?.simulacra_v2.filter(sim => sim.name.toLowerCase().includes($searchTerm.toLowerCase()))
</script>

{#if !$AllSimulacra.fetching}
    <Meta
        title="Simulacra | Tower of Fantasy Index"
        description="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
        image="https://api.toweroffantasy.info{$AllSimulacra.data
            .simulacra_v2[0].assets.avatar}"
    />
    {#each simulacra as entry (entry.name)}
        <EntryItem {entry} />
    {/each}
{/if}
