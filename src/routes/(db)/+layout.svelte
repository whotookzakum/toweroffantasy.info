<script>
    import RadioSliderGroup from "./RadioSliderGroup.svelte";
    import DBNavigation from "./DBNavigation.svelte";

    
</script>

<main class="main-layout">
    <h1>Tower of Fantasy Index</h1>
    <DBNavigation />
    <ul>
        <slot />
    </ul>
</main>

<style lang="scss">
    main {
        margin: auto;
        max-width: 1160px;
    }

    h1 {
        text-align: center;
    }

    ul {
        --img-width: 140px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--img-width), 1fr));
        padding: 0;
        gap: 1rem;
    }
</style>
