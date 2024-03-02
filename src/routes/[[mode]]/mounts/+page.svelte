<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import uniqBy from "lodash/uniqBy";
    import SelectorFilter from "$lib/components/Filters/SelectorFilter.svelte";
    import { applyFilters } from "$lib/utils";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    let q = "";
    let version;
    let uniqVersions = uniqBy(data.mounts, (mount) => mount.version)
        .sort((a, b) => b.version - a.version)
        .map((obj) => ({ name: obj.version, value: obj.version }));

    $: entries = applyFilters(data.mounts, { q, version })
</script>

<Meta
    title="Mounts | Tower of Fantasy Index"
    description="Mounts are vehicles that help you traverse terrain more quickly. All mounts move at the same speed. Owning multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels."
/>

<Ad unit="LB-mounts" />

<h1>Mounts</h1>
<p>
    Mounts are vehicles that help you traverse terrain more quickly. All mounts
    move at the same speed. Owning multiple mounts can unlock achievements, and
    maintaining mounts will reward you with dark crystals. Some mounts have
    different colors available at certain levels.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <SelectorFilter dataset={uniqVersions} bind:value={version} selectorName="Version" />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
