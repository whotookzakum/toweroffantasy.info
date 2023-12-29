<script>
    import EntryItem from "./EntryItem/EntryItem.svelte";
    export let simulacrum_v2, matrix, weapon;
</script>

<ul class="entry-list">
    <EntryItem entry={simulacrum_v2} />
    <EntryItem entry={weapon} />
    <EntryItem entry={matrix} />
</ul>
