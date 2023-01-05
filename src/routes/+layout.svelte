<script>
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/Navigation.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";
    let navIsOpen;
</script>

<div class="layout" class:open={navIsOpen}>
    <Navigation bind:navIsOpen />
    <main>
        <slot />
        <footer class="page-footer">&copy; 2023 Tower of Fantasy Index.</footer>
    </main>
</div>
<BackgroundImage />

<style global lang="scss">
    .layout {
        --content-max-width: 800px;
        --nav-width: 250px;
        display: grid;
        grid-template-columns: 1fr var(--content-max-width) 1fr;
        transition: margin 0.3s ease;
    }

    @media (prefers-reduced-motion) {
        .layout {
            transition: unset;
        }
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
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        display: grid;
        align-content: flex-start;
        grid-template-columns: 1fr min(50ch, calc(100% - 2rem)) 1fr;
        column-gap: 1rem;

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
