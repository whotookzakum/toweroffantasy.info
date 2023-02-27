<script>
    import Gift from "./Gift.svelte";

    export let gifts, categories;
</script>

<h3>Favorite Gifts</h3>
<ol class="categories">
    {#each categories as category}
        <li style={`--clr: var(--${category.toLowerCase().replace(" ", "-")}); color: var(--clr); border-color: var(--clr);`}>
            {category}
        </li>
    {/each}
</ol>
<ol class="gifts">
    {#each gifts as gift}
        <li>
            <Gift {gift} />
        </li>
    {/each}
</ol>
{#if categories.includes("Vera") && !categories.includes("Aesperia")}
    <small style="margin-block: var(--space-2xs); line-height: 1.7;">Vera characters will receive reduced Awakening Points from Non-Vera gifts.</small>
{/if}

<style lang="scss">
    .categories,
    .gifts {
        padding: 0;
        list-style: none;
    }

    .categories {
        --saved: #8b8bc5; // Collectibles
        --everyday-items: #c08f8d;
        --figurines: #da849f;
        --games: #8faecb;
        --limited-store-items: #ddc392; // Limited Edition
        --metal-items: #b09cea; // Metalware
        --decorations: #ababa5;
        --rare-items: #dd64a9;
        --toys: #dd9cea;
        --vera: #cba79a;
        --domain-9: #6bbdd7;
        --aesperia: #86ab83;

        display: flex;
        width: fit-content;
        flex-wrap: wrap;
        gap: 1rem;

        li {
            background: var(--surface2);
            padding: 0.4rem 0.8rem;
            border: 1px solid white;
            box-shadow: 0 1px 4px var(--surface-shadow);
            font-weight: 500;
        }
    }

    .gifts {
        margin: 0;
        grid-template-columns: repeat(auto-fill, 64px);
    }
</style>
