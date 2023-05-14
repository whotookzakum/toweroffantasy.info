<script>
    import Rating from "./Rating.svelte";
    import RecommendedMatrices from "./RecommendedMatrices.svelte";
    import RecommendedPairings from "./RecommendedPairings.svelte";
    import SvelteMarkdown from "svelte-markdown";
    
    export let simulacrum;
</script>

<small class="section-header">{simulacrum.weapon.name}</small>
<h2 id="advice">Advice</h2>

{#if simulacrum.unreleased || simulacrum.rarity === "SR"}
<p><SvelteMarkdown source={`No advice available for **${simulacrum.weapon.name}** :(`} /></p>

{:else}
{#if simulacrum.weapon.rating.length > 0}
<details class="full-bleed">
    <summary>Weapon Rating <small>Based on the community's opinion.</small></summary>
    <dl>
        <Rating weapon={simulacrum.weapon} />
    </dl>
</details>
{/if}

{#if simulacrum.weapon.recommendedPairings.length > 0}
<details class="full-bleed">
    <summary>Recommended Pairings</summary>
    <dl>
        <RecommendedPairings weapon={simulacrum.weapon} />
    </dl>
</details>
{/if}

{#if simulacrum.weapon.recommendedMatrices.length > 0}
<details class="full-bleed">
    <summary>Recommended Matrices</summary>
    <dl>
        <RecommendedMatrices weapon={simulacrum.weapon} />
    </dl>
</details>
{/if}
{/if}

<style lang="scss">
    summary small {
        margin: 0;
        margin-left: 10px;
        color: var(--accent);
        display: inline-block;
    }
    small {
        margin-top: 20px;
    }

    h2, p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    details {
        background: hsla(220, 15%, 17%, 0.9);
        box-shadow: 0 2px 4px var(--surface-shadow);

        & > * {
            padding: 0.5rem 1rem;
        }

        summary:hover {
            background: var(--surface3);
        }

        &[open] summary {
            color: var(--accent);
        }

        &:last-of-type {
            margin-bottom: 0.5rem;
        }
    }

    dl {
        margin: 0;
        gap: 0;
        background: var(--surface2);
        box-shadow: inset 0 7px 9px -7px var(--surface-shadow),
            inset 0 -7px 9px -7px var(--surface-shadow);
    }


    :global(.ability p) {
        margin: 0;
    }
</style>
