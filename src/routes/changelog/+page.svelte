<script>
    import changelog from "$lib/data/changelog.json";
</script>

<h1>Changelog</h1>
<ul>
    {#each changelog as update}
        <li>
            <h2>{update.date}</h2>
            <p>{update.text}</p>
        </li>
    {/each}
</ul>

<style lang="scss">
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: var(--step-2);
        margin-top: var(--space-s);
        color: var(--accent);
    }
</style>