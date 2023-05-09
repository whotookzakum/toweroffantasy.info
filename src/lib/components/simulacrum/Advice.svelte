<script>
    import Rating from "./Rating.svelte";
    import RecommendedMatrices from "./RecommendedMatrices.svelte";
    import RecommendedPairings from "./RecommendedPairings.svelte";
    
    export let weapon;
</script>

<small class="section-header">{weapon.name}</small>
<h2 id="advice">Advice</h2>

{#if weapon.rating.length > 0}
<details class="full-bleed">
    <summary>Weapon Rating</summary>
    <dl>
        <Rating {weapon} />
    </dl>
</details>
{/if}

{#if weapon.recommendedPairings.length > 0}
<details class="full-bleed">
    <summary>Recommended Pairings</summary>
    <dl>
        <RecommendedPairings {weapon} />
    </dl>
</details>
{/if}

{#if weapon.recommendedMatrices.length > 0}
<details class="full-bleed">
    <summary>Recommended Matrices</summary>
    <dl>
        <RecommendedMatrices {weapon} />
    </dl>
</details>
{/if}

<style lang="scss">
    small {
        margin-top: 20px;
    }

    h2 {
        margin-top: 0;
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
