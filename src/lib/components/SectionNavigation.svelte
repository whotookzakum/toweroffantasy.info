<script>
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    export let links;
</script>

<div class="topnav-wrapper full-bleed">
    <Breadcrumbs />
    {#if links}
        <nav class="section-navigation">
            {#each links as link}
                <a href={`#${link.replace(/\s+/g, "-")}`}>{link}</a>
            {/each}
        </nav>
    {/if}
</div>

<style lang="scss">
    .topnav-wrapper {
        display: flex;
        justify-content: space-between;
        color: var(--text2);
        font-weight: bold;
        font-size: 0.75rem;
        padding: 1rem;
        background: var(--surface1);
        text-transform: uppercase;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0rem;
        backdrop-filter: blur(10px);
        z-index: 50;
    }

    .section-navigation {
        display: flex;
        align-items: center;
        gap: 2ch;

        a {
            border: none;
        }
    }

    @media (max-width: 800px) {
        .topnav-wrapper {
            height: 44px;
        }
        .section-navigation {
            display: none;
        }
    }
</style>
