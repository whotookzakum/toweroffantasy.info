<script>
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/Navigation.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    let navIsOpen;
</script>

<svelte:head>
    <meta property="og:site_name" content="Tower of Fantasy Index" />
</svelte:head>

<GoogleAnalytics properties={["G-N68SWH7ZJB"]} />
<div class="layout" class:open={navIsOpen}>
    <Navigation bind:navIsOpen />
    <main class="main-layout">
        <slot />
        <footer class="page-footer">&copy; 2023 Tower of Fantasy Index.</footer>
    </main>
</div>
<BackgroundImage />

<Ad unit="StickyBottom" refreshOnNav />
<Ad unit="Video" refreshOnNav />

<style global lang="scss">
    .layout {
        --content-max-width: 800px;
        --nav-width: 250px;
        display: grid;
        grid-template-columns: 1fr var(--content-max-width) 1fr;
        transition: margin 0.3s ease;
    }

    // 2nav-width + content-width
    @media (max-width: 1300px) {
        .layout {
            grid-template-columns: var(--nav-width) 1fr;
        }
    }

    // content-width
    @media (max-width: 800px) {
        .layout {
            // desktop: when width is small, 1fr works better because 100vw goes under the scrollbar, but using 1fr causes content to contract
            grid-template-columns: var(--nav-width) 100vw;

            &:not(.open) {
                // margin instead of transform provides better framerate on firefox mobile, and allows the nav toggle button to stay fixed at the top; the stacking context gets messed up with transform with the current structure (nav-toggle inside of nav)
                margin-left: calc(-1 * var(--nav-width));
            }
        }
    }

    main {
        background: var(--surface1);
    }

    :global(.main-layout) {
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        display: grid;
        align-content: flex-start;
        grid-template-columns: 1fr min(50ch, calc(100% - 2rem)) 1fr;
        column-gap: 1rem;
        padding-bottom: 90px;

        & > * {
            grid-column: 2;
        }
    }

    .page-footer {
        text-align: center;
        color: var(--text2);
        font-size: var(--step--2);
        padding-block: var(--space-m);
    }
</style>
