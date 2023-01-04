<script>
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/Navigation.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";
    let navIsOpen;
</script>

<Navigation bind:navIsOpen />
<div class="page-wrapper" class:slide={navIsOpen}>
    <main class="page-contents">
        <slot />
        <footer class="page-footer">&copy; 2023 Tower of Fantasy Index.</footer>
    </main>
</div>

<BackgroundImage />

<style global lang="scss">
    .page-wrapper {
        overflow-x: hidden;
        margin-left: 250px;
    }

    @media (max-width: 800px) {
        .page-wrapper {
            margin-left: 0;
        }

        .slide .page-contents {
            transform: translateX(250px) !important;
        }
    }

    .page-contents {
        background: var(--surface1);
        max-width: 800px;
        margin: 0 auto;
        align-content: flex-start;
        transition: all 0.3s ease;
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
