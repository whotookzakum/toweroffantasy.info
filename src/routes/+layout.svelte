<script>
    import "$lib/styles/globals.scss";
    import Navigation, {
        open as navIsOpen
    } from "$lib/components/Navigation.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    import { afterNavigate, beforeNavigate } from "$app/navigation";

    beforeNavigate(() => {
        document.documentElement.setAttribute("data-state", "navigating");
    });

    afterNavigate(() => {
        document.documentElement.getAttribute("data-state");
        document.documentElement.removeAttribute("data-state", "navigating");
    });
</script>

<svelte:head>
    <meta property="og:site_name" content="Tower of Fantasy Index" />
</svelte:head>

<GoogleAnalytics properties={["G-N68SWH7ZJB"]} />
<div class="layout">
    <Navigation />
    <main class:open={$navIsOpen}>
        <slot />
        <footer class="page-footer">&copy; 2023 Tower of Fantasy Index.</footer>
    </main>
</div>
<BackgroundImage />
<Ad unit="lb2" />
<Ad unit="mobile_lb2" />
<Ad unit="player" />

<style global lang="scss">
    .layout {
        --content-max-width: 800px;
        --nav-width: 250px;
        display: contents;
    }

    // 2nav-width + content-width
    // @media (max-width: 1300px) {
    //     .layout {
    //         grid-template-columns: var(--nav-width) 1fr;
    //     }
    // }

    // content-width
    // @media (max-width: 800px) {
    //     .layout {
    //         display: contents;
    //         // desktop: when width is small, 1fr works better because 100vw goes under the scrollbar, but using 1fr causes content to contract
    //         grid-template-columns: var(--nav-width) 100vw;

    //         &:not(.open) {
    //             // margin instead of transform provides better framerate on firefox mobile, and allows the nav toggle button to stay fixed at the top; the stacking context gets messed up with transform with the current structure (nav-toggle inside of nav)
    //             margin-left: calc(-1 * var(--nav-width));
    //         }
    //     }
    // }

    main {
        background: var(--surface1);
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

        &.open {
            transform: translateX(var(--nav-width));
        }
    }

    @media (min-width: 800px) {
        .layout {
            display: grid;
            grid-template-columns: var(--nav-width) 1fr;
        }

        main {
            transform: none;
        }
    }

    @media (min-width: 1300px) {
        .layout {
            grid-template-columns: 1fr var(--content-max-width) 1fr;
        }
    }

    .page-footer {
        text-align: center;
        color: var(--text2);
        font-size: var(--step--2);
        padding-block: var(--space-m);
    }
</style>
