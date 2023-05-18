<script>
    import Rating from "./Rating.svelte";
    import RecommendedMatrices from "./RecommendedMatrices.svelte";
    import RecommendedPairings from "./RecommendedPairings.svelte";

    export let simulacrum;
</script>

<small class="section-header">{simulacrum.weapon.name}</small>
<h2 id="meta">Meta</h2>
{#if simulacrum.unreleased}
    <p>There's nothing here yet!</p>
{:else}
    <p>The following section includes opinions from site maintainers and the community.</p>

    {#if simulacrum.weapon.rating.length > 0}
        <Rating weapon={simulacrum.weapon} />
    {/if}

    <RecommendedPairings weapon={simulacrum.weapon} />
    <RecommendedMatrices weapon={simulacrum.weapon} />
{/if}

<style lang="scss">
    .section-header {
        font-weight: 500;
        font-size: var(--step--1);
        margin-top: var(--space-xl);
        text-transform: none;
    }

    h2,
    p {
        margin-block: 0 1rem;
    }

    :global(.ability p) {
        margin: 0;
    }
</style>
