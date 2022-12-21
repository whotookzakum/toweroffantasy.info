<script>
    import '$lib/styles/globals.scss'
</script>

<div class="grid">
    <nav>Nav goes here</nav>
    <main class="page-contents">
        <slot />
    </main>
</div>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: auto 1fr;
        transition: all 0.3s ease;
    }

    nav {
        background: rgba(255, 0, 0, 0.315);
        width: 250px;
        height: 100vh;
        position: sticky;
        top: 0;
    }

    @media (max-width: 800px) {
        .grid {
            transform: translateX(-250px);
            grid-template-columns: auto 100%;
        }
    }
</style>