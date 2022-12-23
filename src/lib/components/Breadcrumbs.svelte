<script>
    import { page } from "$app/stores";
    const fullRoute = $page.url.pathname.split("/");
</script>

<nav class="breadcrumbs">
    <div class="route">
        <a href="/">Home</a>
    </div>
    {#each fullRoute as route, index}
        {#if route}
            {#if index < fullRoute.length - 1}
                <div class="route">
                    <a href={`/${route}`}>{route.replace(/-/g, " ")}</a>
                </div>
            {:else}
                <div class="route">{route.replace(/-/g, " ")}</div>
            {/if}
        {/if}
    {/each}
</nav>

<style lang="scss">
    .breadcrumbs {
        display: flex;
        align-items: center;

        .route {
            display: flex;
            align-items: center;
        }

        .route + .route::before {
            content: "/";
            margin: 1ch;
        }
    }
</style>
