<script>
    import Meta from "./Meta.svelte";
    import EntryItem from "./EntryItem.svelte";

    export let data;
    $: ({ Entries } = data);

    let entries = [];
    $: if (!$Entries.fetching) {
        const { simulacra_v2, weapons, matrices } = $Entries.data
        entries = [...simulacra_v2, ...weapons, ...matrices]
    }
    // $: entries = combined.sort((a, b) => {
    //     const firstBannerA = a.Banners[a.Banners.length - 1]?.bannerNo ?? 1
    //     const firstBannerB = b.Banners[b.Banners.length - 1]?.bannerNo ?? -1
    //     return firstBannerB - firstBannerA
    // })
</script>

<Meta
    title="Home | Tower of Fantasy Index"
    description="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
/>

{#each entries as entry}
    <EntryItem {entry} />
{/each}
