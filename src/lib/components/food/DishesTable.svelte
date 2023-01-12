<script>
    import SvelteMarkdown from "svelte-markdown";
    import Item from "$lib/components/Item.svelte";
    import EffectIcon from "$lib/components/food/EffectIcon.svelte";
    import INGREDIENTS from "$lib/data/food/ingredients.json";

    export let dishes;

    function getIngredientData(input) {
        return INGREDIENTS.find((i) => i.name === input);
    }
</script>

<div class="table-wrapper">
    <table class="dishes-table bg-alternate">
        <thead>
            <th>Item</th>
            <th>Effect</th>
            <th>Recipe</th>
        </thead>
        <tbody>
            {#each dishes as dish}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <Item rarity={dish.rarity}>
                                <img
                                    src={`/images/Icon/caiyao/${dish.imgSrc}.png`}
                                    alt={dish.name}
                                    width="96"
                                    height="96"
                                    loading="lazy"
                                />
                                {#if dish.icons}
                                    {#each dish.icons as effect}
                                        <EffectIcon {effect} absolute />
                                    {/each}
                                {/if}
                            </Item>
                            <h3>{dish.name}</h3>
                        </div>
                    </td>
                    <td class="dish-effects">
                        <SvelteMarkdown source={dish.effect} />
                    </td>
                    <td>
                        <ul class="recipe">
                            {#each dish.ingredients as ingredient}
                                <li>
                                    <Item
                                        rarity={getIngredientData(
                                            ingredient.item
                                        ).rarity}
                                        amount={ingredient.amount}
                                    >
                                        <img
                                            src={`/images/Icon/shicai/${
                                                getIngredientData(
                                                    ingredient.item
                                                ).imgSrc
                                            }.png`}
                                            alt={ingredient.item}
                                            width="48"
                                            height="48"
                                            loading="lazy"
                                        />
                                    </Item>
                                    <a
                                        href={`#${ingredient.item
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                    >
                                        {ingredient.item}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    tr {
        content-visibility: auto;
        contain-intrinsic-size: 0 153px;
    }

    .img-and-name {
        row-gap: 0.5rem;
    }

    .dishes-table {
        table-layout: fixed;
    }

    ul.recipe {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            a {
                font-size: var(--step--1);
                line-height: 1.2;
            }
        }
    }
</style>
