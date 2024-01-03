<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import TypeFilters from "$components/Filters/TypeFilters.svelte";
    import { queryParameters } from "sveltekit-search-params";
    import RarityFilters from "$components/Filters/RarityFilters.svelte";
    import BannerFilters from "$components/Filters/BannerFilters.svelte";
    import VersionSelector from "$components/Filters/VersionSelector.svelte";
    import { showWepOnSimEntry } from "$lib/stores";
    import { getBannersMatch } from "$lib/utils"
    import createPopperAction from "./usePopper"

    export let data;
    const searchParams = queryParameters();

    $: entries = data.simulacra_v2.filter((entry) => {
        const { q, element, category, version, rarity, banners } = $searchParams;
        const searchMatch = q
            ? entry.name.toLowerCase().includes(q.toLowerCase())
            : true;
        const elementMatch =
            element && $showWepOnSimEntry
                ? element.split(" ").includes(entry.weapon.element)
                : true;
        const categoryMatch =
            category && $showWepOnSimEntry
                ? category.split(" ").includes(entry.weapon.category)
                : true;
        const versionMatch =
            version && version !== "all" ? entry.version === version : true;
        const rarityMatch = rarity
            ? rarity.split(" ").includes(`${entry.rarity}`)
            : true;
        const bannersMatch = banners ? getBannersMatch(banners, entry) : true

        return searchMatch && elementMatch && categoryMatch && versionMatch && rarityMatch && bannersMatch
    });

    const [usePopperElement, usePopperTooltip] = createPopperAction()

    let placement = "bottom-start"
    let showTooltip = true
</script>

<Meta
    title="Simulacra | Tower of Fantasy Index"
    description="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
    image={data.simulacra_v2[0].assetsA0.avatar}
/>
<button on:click={() => placement = "right"}>click me</button>
<h1>Simulacra</h1>

<div use:usePopperElement>hello worlddddddd <input type="checkbox" bind:checked={showTooltip}></div>
{#if showTooltip}
    <div use:usePopperTooltip={{ placement }}>Tooltip itself</div>
{/if}


<p>
    Simulacra (aka Mimics) are the player's representation of the characters
    found in Tower of Fantasy. They have an associated weapon and an optional
    passive effect. Their associated matrices must be obtained separately.
</p>

<div class="filters-row">
    <SearchBar />
    {#if $showWepOnSimEntry}
        <TypeFilters type="category" />
        <TypeFilters type="element" />
        <RarityFilters originalData={data.simulacra_v2} />
    {/if}
    <BannerFilters />
    <VersionSelector originalData={data.simulacra_v2} />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
            isNew={entry.id === data.simulacra_v2[0].id}
        />
    {/each}
</ul>