<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import { showWepOnSimEntry } from "$lib/stores";
    import uniqBy from "lodash/uniqBy";
    import SelectorFilter from "$lib/components/Filters/SelectorFilter.svelte";
    import { applyFilters } from "$lib/utils";
    import CheckboxFilters from "$lib/components/Filters/CheckboxFilters.svelte";

    export let data;

    let q = "";
    let rarity, version, banners, element, category;
    let uniqRarities = uniqBy(data.simulacra_v2, (entry) => entry.rarity).map(
        (obj) => ({ type: "rarity", value: obj.rarity }),
    );
    let uniqVersions = uniqBy(data.simulacra_v2, (entry) => entry.version)
        .sort((a, b) => b.version - a.version)
        .map((obj) => ({ name: obj.version, value: obj.version }));

    $: entries = applyFilters(data.simulacra_v2, { q, version, rarity, element, category, banners });
</script>

<Meta
    title="Simulacra | Tower of Fantasy Index"
    description="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
    image={data.simulacra_v2[0].assetsA0.avatar}
/>

<h1>Simulacra</h1>
<p>
    Simulacra (aka Mimics) are the player's representation of the characters
    found in Tower of Fantasy. They have an associated weapon and an optional
    passive effect. Their associated matrices must be obtained separately.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    {#if $showWepOnSimEntry}
        <CheckboxFilters type="category" bind:value={category} />
        <CheckboxFilters type="element" bind:value={element} />
        <CheckboxFilters
            type="rarity"
            bind:value={rarity}
            dataset={uniqRarities}
        />
    {/if}
    <CheckboxFilters type="banners-simulacra" bind:value={banners} />
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
