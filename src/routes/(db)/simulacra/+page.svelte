<script>
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: ({ AllSimulacra } = data);
</script>

{#if !$AllSimulacra.fetching}
    <Meta
        title="Simulacra | Tower of Fantasy Index"
        description="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
        image="https://api.toweroffantasy.info{$AllSimulacra.data
            .simulacra_v2[0].assets.avatar}"
    />
    {#each $AllSimulacra.data.simulacra_v2 as entry}
        <EntryItem {entry} />
    {/each}
{/if}
