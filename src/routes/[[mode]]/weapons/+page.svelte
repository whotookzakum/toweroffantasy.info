<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import TypeFilters from "$components/Filters/TypeFilters.svelte";
    import { queryParameters } from "sveltekit-search-params";
    import RarityFilters from "$components/Filters/RarityFilters.svelte";
    import BannerFilters from "$components/Filters/BannerFilters.svelte";
    import VersionSelector from "$components/Filters/VersionSelector.svelte";

    export let data;
    const searchParams = queryParameters();

    $: entries = data.weapons.filter((entry) => {
        const { q, element, category, version, rarity } = $searchParams;
        const searchMatch = q
            ? entry.name.toLowerCase().includes(q.toLowerCase())
            : true;
        const elementMatch = element
            ? element.split(" ").includes(entry.element)
            : true;
        const categoryMatch = category
            ? category.split(" ").includes(entry.category)
            : true;
        const versionMatch =
            version && version !== "all" ? entry.version === version : true;
        const rarityMatch = rarity
            ? rarity.split(" ").includes(`${entry.rarity}`)
            : true;

        return searchMatch && elementMatch && categoryMatch && versionMatch && rarityMatch
    });
</script>

<Meta
    title="Weapons | Tower of Fantasy Index"
    description="Up to 3 weapons can be equipped at a time in Tower of Fantasy. The player can make use of various weapon elements and skills to increase their effectiveness in combat. Most weapons have an associated Simulacrum and Matrices."
    image={data.weapons[0].assets.icon}
/>

<h1>Weapons</h1>
<p>
    Up to 3 weapons can be equipped at a time in Tower of Fantasy. The player
    can make use of various weapon elements and skills to increase their
    effectiveness in combat. Most weapons have an associated Simulacrum and
    Matrices.
</p>

<div class="filters-row">
    <SearchBar />
    <TypeFilters type="category" />
    <TypeFilters type="element" />
    <RarityFilters originalData={data.weapons} />
    <BannerFilters />
    <VersionSelector originalData={data.weapons} />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
            isNew={entry.id === data.weapons[0].id}
        />
    {/each}
</ul>
