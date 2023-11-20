<script>
    import Meta from "./Meta.svelte";
    import EntryItem from "./EntryItem.svelte";

    export let data;
    $: ({ AllEntries } = data);
    $: ({ simulacra_v2, weapons, matrices } = $AllEntries.fetching
        ? { simulacra_v2: [], weapons: [], matrices: [] }
        : $AllEntries.data);
</script>

<Meta
    title="Home | Tower of Fantasy Index"
    description="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
/>

{#each [...simulacra_v2, ...weapons, ...matrices] as entry}
    <EntryItem {entry} />
{/each}
