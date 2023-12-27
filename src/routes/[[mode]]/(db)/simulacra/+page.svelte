<script>
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";
    import SearchBar from "../SearchBar.svelte";
    import TypeFilters from "../TypeFilters.svelte";
    import { queryParameters } from "sveltekit-search-params";
    import RarityFilters from "../RarityFilters.svelte";
    import BannerFilters from "../BannerFilters.svelte";
    import VersionSelector from "../VersionSelector.svelte";
    import { showWepOnSimEntry } from "$lib/stores"

    export let data;
    const searchParams = queryParameters();

    $: entries = data.simulacra_v2.filter((entry) => {
        const { q, element, category, version } = $searchParams;
        const searchMatch = q
            ? entry.name.toLowerCase().includes(q.toLowerCase())
            : true;
        const elementMatch = element
            ? element.split(" ").includes(entry.weapon.element)
            : true;
        const categoryMatch = category
            ? category.split(" ").includes(entry.weapon.category)
            : true;
        const versionMatch =
            version && version !== "all" ? entry.version === version : true;

        return searchMatch && elementMatch && categoryMatch && versionMatch;
    });
</script>

<div class="filters-row">
    <label>
        <input type="checkbox" bind:checked={$showWepOnSimEntry} /> Show weapon details
    </label>
    <SearchBar />
    <TypeFilters type="category" />
    <TypeFilters type="element" />
    <RarityFilters />
    <BannerFilters />
    <VersionSelector originalData={data.simulacra_v2} />
</div>

<Meta
    title="Simulacra | Tower of Fantasy Index"
    description="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
    image={data.simulacra_v2[0].assetsA0.avatar}
/>
<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem
            {entry}
            slot="search-results"
            isNew={entry.id === data.simulacra_v2[0].id}
        />
    {/each}
</ul>
