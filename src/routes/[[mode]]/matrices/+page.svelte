<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import { applyFilters } from "$lib/utils";
    import uniqBy from "lodash/uniqBy";
    import CheckboxFilters from "$lib/components/Filters/CheckboxFilters.svelte";
    import SelectorFilter from "$lib/components/Filters/SelectorFilter.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    let q = "";
    let version = "all";
    let rarity, banners;
    let uniqRarities = uniqBy(data.matrices, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let uniqVersions = uniqBy(data.matrices, (entry) => entry.version)
        .sort((a, b) => b.version - a.version)
        .map((obj) => ({ name: obj.version, value: obj.version }));

    $: entries = applyFilters(data.matrices, { q, version, rarity, banners });
</script>

<Meta
    title="Matrices | Tower of Fantasy Index"
    description="Matrices (aka Chips) are items that can be attached to one of four slots on a weapon (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
    image={data.matrices[0].assets.iconLarge}
/>

<Ad unit="LB-matrices" />

<h1>Matrices {rarity}</h1>
<p>
    Matrices (aka Chips) are items that can be attached to one of four slots on
    a weapon (Emotion, Mind, Belief, and Memory) to provide stat boosts and
    special effects.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <CheckboxFilters type="rarity" bind:value={rarity} dataset={uniqRarities} />
    <CheckboxFilters type="banners-matrices" bind:value={banners} />
    <SelectorFilter dataset={uniqVersions} bind:value={version} selectorName="Version" />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
