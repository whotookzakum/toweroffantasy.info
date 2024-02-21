<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import { queryParameters } from "sveltekit-search-params";
    import RarityFilters from "$components/Filters/RarityFilters.svelte";
    import BannerFilters from "$components/Filters/BannerFilters.svelte";
    import VersionSelector from "$components/Filters/VersionSelector.svelte";

    export let data;
    const searchParams = queryParameters();

    $: entries = data.relics.filter((entry) => {
        const { q, version, rarity } = $searchParams;
        const searchMatch = q
            ? entry.name.toLowerCase().includes(q.toLowerCase())
            : true;
        const versionMatch =
            version && version !== "all" ? entry.version === version : true;
        const rarityMatch = rarity
            ? rarity.split(" ").includes(`${entry.rarity}`)
            : true;

        return searchMatch && versionMatch && rarityMatch
    });
</script>

<Meta
    title="Relics | Tower of Fantasy Index"
    description="Relics (aka Gadgets) are tools that aid the player in exploration or combat."
    image={data.relics[0].icon}
/>

<h1>Relics</h1>
<p>
    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
</p>

<div class="filters-row">
    <SearchBar />
    <RarityFilters originalData={data.relics} />
    <BannerFilters />
    <VersionSelector originalData={data.relics} />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
        />
    {/each}
</ul>
