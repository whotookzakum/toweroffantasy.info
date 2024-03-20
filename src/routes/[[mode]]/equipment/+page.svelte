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
    let element, rarity, type;
    let uniqRarities = uniqBy(data.gears, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let uniqTypes = uniqBy(data.gears, (entry) => entry.slotType)
        .sort((a, b) => b.slotType - a.slotType)
        .map((obj) => ({ name: obj.slotType, value: obj.slotType }));

    $: entries = applyFilters(data.gears, { q, rarity, type, element });
</script>

<Meta
    title="Equipment | Tower of Fantasy Index"
    description="Various pieces of equipment can be worn and upgraded to strengthen your character."
/>

<Ad unit="LB-gears" />

<h1>Equipment</h1>
<p>
    Various pieces of equipment can be worn and upgraded to strengthen your
    character. Equipment can come in elemental variations, which are more likely
    to have stats pertaining to that element.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <CheckboxFilters type="element" bind:value={element} />
    <CheckboxFilters type="rarity" bind:value={rarity} dataset={uniqRarities} />
    <SelectorFilter dataset={uniqTypes} bind:value={type} selectorName="Type" />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
