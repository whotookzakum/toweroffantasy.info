<script>
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/Navigation.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";
    import NavigationToggle from "../lib/components/NavigationToggle.svelte";

    let navIsOpen;
</script>

<NavigationToggle bind:navIsOpen />
<div class="grid" class:show-nav={navIsOpen}>
    <Navigation />
    <main class="page-contents">
        <slot />
        <footer class="page-footer">
            &copy; 2023 Tower of Fantasy Index.
        </footer>
    </main>
</div>

<BackgroundImage />

<style global lang="scss">
    .grid {
        display: grid;
        grid-template-columns: auto minmax(auto, 800px) auto;
        transition: transform 0.3s ease;
    }

    @media (max-width: 800px) {
        .page-contents {
            grid-column: 1 / -1;
        }
    }

    .show-nav {
        transform: translateX(0) !important;
    }

    main.page-contents {
        background: var(--surface1);
        margin: 0 auto;
        align-content: flex-start;
        // box-shadow: 0 0 4px 2px var(--surface-shadow);
        display: grid;
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
