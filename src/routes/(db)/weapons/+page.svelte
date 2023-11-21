<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: ({ AllWeapons } = data);
    $: weapons = $AllWeapons?.data?.weapons.filter(wep => wep.name.toLowerCase().includes($searchTerm.toLowerCase()))
</script>

{#if !$AllWeapons.fetching}
    <Meta
        title="Weapons | Tower of Fantasy Index"
        description=""
        image="https://api.toweroffantasy.info{$AllWeapons.data.weapons[0]
            .assets.avatar}"
    />
    {#each weapons as entry (entry.name)}
        <EntryItem {entry} />
    {/each}
{/if}
