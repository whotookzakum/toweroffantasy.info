<script>
    import EntryItem from "./EntryItem/EntryItem.svelte";
    export let simulacrumV2, matrix, weapon;
</script>

<ul class="entry-list">
    {#if simulacrumV2}
        <EntryItem entry={simulacrumV2} />
    {/if}
    {#if weapon}
        <EntryItem entry={weapon} />
    {/if}
    {#if matrix}
        <EntryItem entry={matrix} />
    {/if}
</ul>
