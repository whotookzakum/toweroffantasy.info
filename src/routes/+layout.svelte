<script>
    import '$lib/styles/globals.scss'
    import Navigation from '$lib/components/Navigation.svelte';
    import BackgroundImage from '$lib/components/BackgroundImage.svelte';
</script>

<div class="grid">
    <Navigation />
    <main class="page-contents">
        <slot />
    </main>
</div>

<BackgroundImage />

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: auto 1fr;
        transition: all 0.3s ease;
    }

    @media (max-width: 800px) {
        .grid {
            transform: translateX(-250px);
            grid-template-columns: auto 100%;
        }
    }
</style>