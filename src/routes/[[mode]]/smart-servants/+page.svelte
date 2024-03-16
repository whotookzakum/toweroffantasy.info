<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import uniqBy from "lodash/uniqBy";
    import { applyFilters } from "$lib/utils";
    import CheckboxFilters from "$lib/components/Filters/CheckboxFilters.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    let q = "";
    let rarity;
    let uniqRarities = uniqBy(data.servants, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let version;

    $: entries = applyFilters(data.servants, { q, version, rarity });
</script>

<Meta
    title="Smart Servants | Tower of Fantasy Index"
    description="Smart Servants are small robots that aid the player in combat."
    image={data.servants[0].assets.activatedIcon}
/>

<Ad unit="LB-servants" />

<h1>Smart Servants</h1>
<p>
    Smart Servants are small robots that aid the player in combat.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <!-- <CheckboxFilters type="rarity" bind:value={rarity} dataset={uniqRarities} /> -->
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
