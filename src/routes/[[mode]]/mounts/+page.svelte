<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import VersionSelector from "$components/Filters/VersionSelector.svelte";
    import { queryParameters } from "sveltekit-search-params";

    export let data;
    const searchParams = queryParameters();

    $: entries = data.mounts.filter((entry) => {
        const { q, version } = $searchParams;
        const searchMatch = q
            ? entry.name?.toLowerCase().includes(q.toLowerCase())
            : true;
        const versionMatch =
            version && version !== "all" ? entry.version === version : true;

        return searchMatch && versionMatch;
    });
</script>

<Meta
    title="Mounts | Tower of Fantasy Index"
    description="Mounts are vehicles that help you traverse terrain more quickly. All mounts move at the same speed. Owning multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels."
    image={data.mounts[0].assets.icon}
/>

<h1>Mounts</h1>
<p>
    Mounts are vehicles that help you traverse terrain more quickly. All mounts
    move at the same speed. Owning multiple mounts can unlock achievements, and
    maintaining mounts will reward you with dark crystals. Some mounts have
    different colors available at certain levels.
</p>

<div class="filters-row">
    <SearchBar />
    <VersionSelector originalData={data.mounts} />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id)}
        <EntryItem {entry} />
    {/each}
</ul>
