<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import uniqBy from "lodash/uniqBy";
    import { applyFilters } from "$lib/utils";
    import CheckboxFilters from "$lib/components/Filters/CheckboxFilters.svelte";
    import Ad from "$components/Ad/Ad.svelte";
    import SelectorFilter from "$lib/components/Filters/SelectorFilter.svelte";

    export let data;
    let q = "";
    let rarity;
    let uniqRarities = uniqBy(data.gears, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let type;
    let uniqTypes = uniqBy(data.gears, (entry) => entry.type)
        .sort((a, b) => b.type - a.type)
        .map((obj) => ({ name: obj.type, value: obj.type }));

    $: entries = applyFilters(data.gears, { q, rarity, type });
</script>

<Meta
    title="Equipment | Tower of Fantasy Index"
    description="Various pieces of equipment can be worn and upgraded to strengthen your character."
/>

<Ad unit="LB-gears" />

<h1>Equipment</h1>
<p>
    Various pieces of equipment can be worn and upgraded to strengthen your character.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <CheckboxFilters type="rarity" bind:value={rarity} dataset={uniqRarities} />
    <SelectorFilter
        dataset={uniqTypes}
        bind:value={type}
        selectorName="Type"
    />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
