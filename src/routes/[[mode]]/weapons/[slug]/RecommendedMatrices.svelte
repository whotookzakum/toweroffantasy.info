<script>
    import EntryItem from "$components/EntryItem/EntryItem.svelte";

    export let matrices;
</script>

{#if matrices?.length > 0}
    <h3>Recommended Matrices</h3>
    <ul class="entry-list">
        {#each matrices as matrix}
            <EntryItem entry={matrix} matrixPieces={matrix.pieces} />
        {/each}
    </ul>
{/if}
