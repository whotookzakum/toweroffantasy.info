<script>
    import Youtube from "../Youtube.svelte";
import Rating from "./Rating.svelte";
    import RecommendedMatrices from "./RecommendedMatrices.svelte";
    import RecommendedPairings from "./RecommendedPairings.svelte";

    export let simulacrum;
</script>

<small id="meta" class="section-header" style:color={`var(--element-${simulacrum.weapon.element})`}>{simulacrum.weapon.name}</small>
<h2>Meta</h2>
{#if simulacrum.unreleased}
    <p>There's nothing here yet!</p>
{:else}
    <p>The following section includes opinions from site maintainers and the community.</p>
    {#if simulacrum.weapon.analysisVideoSrc}
        <Youtube source={simulacrum.weapon.analysisVideoSrc} caption={`Check out Maygi's detailed breakdown of ${simulacrum.name}.`} />
    {/if}
    {#if simulacrum.weapon.rating.length > 0}
        <Rating weapon={simulacrum.weapon} />
    {/if}
    {#if simulacrum.weapon.recommendedPairings.length > 0}
        <RecommendedPairings weapon={simulacrum.weapon} />
    {/if}
    {#if simulacrum.weapon.recommendedMatrices.length > 0}
        <RecommendedMatrices weapon={simulacrum.weapon} />
    {/if}
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
