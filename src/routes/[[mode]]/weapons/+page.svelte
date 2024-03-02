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
    let rarity, version, banners, element, category;
    let uniqRarities = uniqBy(data.weapons, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let uniqVersions = uniqBy(data.weapons, (entry) => entry.version)
        .sort((a, b) => b.version - a.version)
        .map((obj) => ({ name: obj.version, value: obj.version }));

    $: entries = applyFilters(data.weapons, { q, version, rarity, element, category, banners });
</script>

<Meta
    title="Weapons | Tower of Fantasy Index"
    description="Up to 3 weapons can be equipped at a time in Tower of Fantasy. The player can make use of various weapon elements and skills to increase their effectiveness in combat. Most weapons have an associated Simulacrum and Matrices."
    image={data.weapons[0].assets.icon}
/>

<Ad unit="LB-weapons" />

<h1>Weapons</h1>
<p>
    Up to 3 weapons can be equipped at a time in Tower of Fantasy. The player
    can make use of various weapon elements and skills to increase their
    effectiveness in combat. Most weapons have an associated Simulacrum and
    Matrices.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <CheckboxFilters type="category" bind:value={category} />
    <CheckboxFilters type="element" bind:value={element} />
    <CheckboxFilters type="rarity" bind:value={rarity} dataset={uniqRarities} />
    <CheckboxFilters type="banners-simulacra" bind:value={banners} />
    <SelectorFilter dataset={uniqVersions} bind:value={version} selectorName="Version" />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
