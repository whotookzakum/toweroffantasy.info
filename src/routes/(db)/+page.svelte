<script>
    import Meta from "./Meta.svelte";
    import EntryItem from "./EntryItem.svelte";

    export let data;
    $: ({ AllEntries } = data);
    $: ({ simulacra_v2, weapons, matrices } = $AllEntries.fetching
        ? { simulacra_v2: [], weapons: [], matrices: [] }
        : $AllEntries.data);
    $: not = [...simulacra_v2, ...weapons, ...matrices]
    $: entries = not.sort((a, b) => {
        const firstBannerA = a.banners[a.banners.length - 1]?.bannerNo ?? 1
        const firstBannerB = b.banners[b.banners.length - 1]?.bannerNo ?? -1
        return firstBannerB - firstBannerA
    })
    $: console.log(entries)
</script>

<Meta
    title="Home | Tower of Fantasy Index"
    description="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
/>

{#each entries as entry}
    <EntryItem {entry} />
{/each}
