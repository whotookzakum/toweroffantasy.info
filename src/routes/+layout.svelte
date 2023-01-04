<script>
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/Navigation.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";
    import NavigationToggle from "../lib/components/NavigationToggle.svelte";

    let navIsOpen;
</script>

<NavigationToggle bind:navIsOpen />
<Navigation navIsOpen={navIsOpen} />
<div class="page-wrapper" class:is-open={navIsOpen}>
    <main class="page-contents">
        <slot />
        <footer class="page-footer">
            &copy; 2023 Tower of Fantasy Index.
        </footer>
    </main>
</div>

<BackgroundImage />

<style global lang="scss">
    .page-wrapper {
        transition: all 0.3s ease;
        overflow-x: hidden;
        padding-left: 250px;
        margin-left: 0;
    }

    @media (max-width: 800px) {
        .page-wrapper {
            padding-left: 0;
        }

        .page-wrapper.is-open {
            margin-left: 250px;
        }
    }

    .show-nav {
        transform: translateX(0) !important;
    }

    main.page-contents {
        background: var(--surface1);
        width: 100vw;
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
