<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import VersionSelector from "$components/Filters/VersionSelector.svelte";
    import { applyFilters } from "$lib/utils";
    import uniqBy from "lodash/uniqBy";
    import CheckboxFilters from "$lib/components/Filters/CheckboxFilters.svelte";

    export let data;
    let q = "";
    let version = "all";
    let rarity;
    let uniqRarities = uniqBy(data.matrices, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let banners;

    $: entries = applyFilters(data.matrices, { q, version, rarity, banners });
</script>

<Meta
    title="Matrices | Tower of Fantasy Index"
    description="Matrices (aka Chips) are items that can be attached to one of four slots on a weapon (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
    image={data.matrices[0].assets.iconLarge}
/>

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
    <VersionSelector originalData={data.matrices} bind:version />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
