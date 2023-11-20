<script>
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: ({ AllWeapons } = data);
</script>

{#if !$AllWeapons.fetching}
    <Meta
        title="Weapons | Tower of Fantasy Index"
        description=""
        image="https://api.toweroffantasy.info{$AllWeapons.data.weapons[0]
            .assets.avatar}"
    />
    {#each $AllWeapons.data.weapons as entry}
        <EntryItem {entry} />
    {/each}
{/if}
