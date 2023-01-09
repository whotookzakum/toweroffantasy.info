<script>
    import changelog from "$lib/data/changelog.json";
</script>

<svelte:head>
    <title>Changelog | Tower of Fantasy Index</title>
    <meta name="description" content="A list of all updates and changes to the Tower of Fantasy index.">
    <meta property="og:title" content="Changelog" />
    <meta
        property="og:description"
        content="A list of all updates and changes to the Tower of Fantasy index."
    />
    <meta
        property="og:image"
        content="/images/41.gif"
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

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