<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import uniqBy from "lodash/uniqBy";
    import SelectorFilter from "$lib/components/Filters/SelectorFilter.svelte";
    import { applyFilters } from "$lib/utils";
    import CheckboxFilters from "$lib/components/Filters/CheckboxFilters.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    let q = "";
    let rarity;
    let uniqRarities = uniqBy(data.relics, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let version;
    let uniqVersions = uniqBy(data.relics, (entry) => entry.version)
        .sort((a, b) => b.version - a.version)
        .map((obj) => ({ name: obj.version, value: obj.version }));

    $: entries = applyFilters(data.relics, { q, version, rarity });
</script>

<Meta
    title="Relics | Tower of Fantasy Index"
    description="Relics (aka Gadgets) are tools that aid the player in exploration or combat."
    image={data.relics[0].icon}
/>

<Ad unit="LB-relics" />

<h1>Relics</h1>
<p>
    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <CheckboxFilters type="rarity" bind:value={rarity} dataset={uniqRarities} />
    <SelectorFilter
        dataset={uniqVersions}
        bind:value={version}
        selectorName="Version"
    />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
