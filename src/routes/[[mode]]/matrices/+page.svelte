<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import { queryParameters } from "sveltekit-search-params";
    import RarityFilters from "$components/Filters/RarityFilters.svelte";
    import BannerFilters from "$components/Filters/BannerFilters.svelte";
    import VersionSelector from "$components/Filters/VersionSelector.svelte";
    import { getBannersMatch } from "$lib/utils"

    export let data;
    const searchParams = queryParameters();

    $: entries = data.matrices.filter((entry) => {
        const { q, version, rarity, banners } = $searchParams;
        const searchMatch = q
            ? entry.name.toLowerCase().includes(q.toLowerCase())
            : true;
        const versionMatch =
            version && version !== "all" ? entry.version === version : true;
        const rarityMatch = rarity
            ? rarity.split(" ").includes(`${entry.rarity}`)
            : true;
        const bannersMatch = banners ? getBannersMatch(banners, entry) : true

        return searchMatch && versionMatch && rarityMatch && bannersMatch
    });
</script>

<Meta
    title="Matrices | Tower of Fantasy Index"
    description="Matrices (aka Chips) are items that can be attached to one of four slots on a weapon (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
    image={data.matrices[0].assets.iconLarge}
/>

<h1>Matrices</h1>
<p>
    Matrices (aka Chips) are items that can be attached to one of four slots on
    a weapon (Emotion, Mind, Belief, and Memory) to provide stat boosts and
    special effects.
</p>

<div class="filters-row">
    <SearchBar />
    <RarityFilters originalData={data.matrices} />
    <BannerFilters />
    <VersionSelector originalData={data.matrices} />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
        />
    {/each}
</ul>
