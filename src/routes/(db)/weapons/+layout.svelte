<script>
    import { searchTerm } from "$lib/stores";
    import Meta from "../Meta.svelte";
    import WeaponEntryItem from "../WeaponEntryItem.svelte";
    import DBLayout from "../DBLayout.svelte";

    export let data;
    $: ({ Weapons } = data);
    $: weapons = $Weapons?.data?.weapons || []
    // .filter((wep) =>
    //     wep.name.toLowerCase().includes($searchTerm.toLowerCase()),
    // );
</script>

<DBLayout>
    <slot />
    <svelte:fragment slot="search-results">
        {#if !$Weapons.fetching}
            <Meta
                title="Weapons | Tower of Fantasy Index"
                description=""
                image="https://api.toweroffantasy.info{$Weapons?.data?.weapons[0]?.assets?.icon}"
            />
            {#each weapons as entry (entry.id)}
                <WeaponEntryItem {entry} slot="search-results" />
            {/each}
        {/if}
    </svelte:fragment>
</DBLayout>