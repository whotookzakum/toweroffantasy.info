<script>
    import EntryItem from "$components/EntryItem/EntryItem.svelte";

    export let weapons;
</script>

{#if weapons?.length > 0}
    <h3>Recommended Weapons</h3>
    <ul class="entry-list">
        {#each weapons as weapon}
            <EntryItem entry={weapon} />
        {/each}
    </ul>
{/if}
