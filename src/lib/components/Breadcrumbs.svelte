<script>
    import { page } from "$app/stores";
    const pathChunks = $page.url.pathname.split("/");
</script>

<nav class="breadcrumbs">
    <div class="link">
        <a href="/">Home</a>
    </div>
    {#each pathChunks as path, index}
        {#if path}
            {#if index < pathChunks.length - 1}
                <div class="link">
                    <a href={`/${path}`}>{path}</a>
                </div>
            {:else}
                <div class="link">{path}</div>
            {/if}
        {/if}
    {/each}
</nav>

<style lang="scss">
    .breadcrumbs {
        display: flex;
        align-items: center;

        .link {
            display: flex;
            align-items: center;
        }

        .link + .link::before {
            content: "/";
            margin: 1ch;
        }
    }
</style>
