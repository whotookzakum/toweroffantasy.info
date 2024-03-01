<script>
    import EntryItem from "./EntryItem/EntryItem.svelte";
    export let simulacrum_v2, matrix, weapon;
</script>

<ul class="entry-list">
    {#if simulacrum_v2}
        <EntryItem entry={simulacrum_v2} />
    {/if}
    {#if weapon}
        <EntryItem entry={weapon} />
    {/if}
    {#if matrix}
        <EntryItem entry={matrix} />
    {/if}
</ul>
