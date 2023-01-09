<script>
    import SvelteMarkdown from "svelte-markdown";
    import ingredientsData from "$lib/data/food/ingredients.json";
    import dishesData from "$lib/data/food/dishes.json";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import { onMount } from "svelte";
    import AnchorJS from "anchor-js";
    import Item from "$lib/components/Item.svelte";
    import EffectIcon from "$lib/components/food/EffectIcon.svelte";
    import FoodFilters from "../../lib/components/food/FoodFilters.svelte";
    import Ad from "$lib/components/Ad.svelte";

    onMount(() => {
        const anchors = new AnchorJS();
        anchors.add("h3");
    });

    function getIngredientData(input) {
        return ingredients.find((i) => i.name === input);
    };

    let dishes = dishesData;
    let ingredients = ingredientsData;
    let filters = {};

    // Filters are AND, i.e. volt ATK && rarity 4
    // They are not OR, i.e. volt ATK || rarity 4
    $: if (filters.rarityFilters && filters.rarityFilters.length > 0) {
        dishes = dishesData.filter((dish) =>
            filters.rarityFilters.includes(dish.rarity)
        );
    } else {
        dishes = dishesData;
    }

    $: if (filters.buffFilters && filters.buffFilters.length > 0) {
        dishes = dishes.filter((dish) =>
            dish.icons && dish.icons.some(t => filters.buffFilters.includes(t))
        );
    } 

    $: if (filters.recoveryFilters && filters.recoveryFilters.length > 0) {
        dishes = dishes.filter((dish) =>
            dish.icons && dish.icons.some(t => filters.recoveryFilters.includes(t))
        );
    }
</script>

<svelte:head>
    <title>Food | Tower of Fantasy Index</title>
    <meta name="description" content="Food can provide buffs and recover HP, satiety, and stamina. Satiety level determines how much HP you will passively recover while out of combat.">
    <meta property="og:title" content="Food" />
    <meta
        property="og:description"
        content="Food can provide buffs and recover HP, satiety, and stamina. Satiety level determines how much HP you will passively recover while out of combat."
    />
    <meta
        property="og:image"
        content="/images/Icon/caiyao/Item_Vera_Cooking29.png"
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation links={["dishes", "ingredients"]} />
<h1>Food</h1>

<p>
    Food can provide buffs and recover HP, satiety, and stamina. Satiety level
    determines how much HP you will passively recover while out of combat.
</p>
<p>
    To permanently unlock a recipe, you will have to successfully cook the dish
    once. Add extra amounts of the correct ingredients to boost your success
    rate!
</p>

<FoodFilters bind:filters />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="dishes">Dishes</h2>
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

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<h2 id="ingredients">Ingredients</h2>
<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each ingredients as ingredient}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/Icon/shicai/${ingredient.imgSrc}.png`}
                            alt={ingredient.name}
                            width="64"
                            height="64"
                            loading="lazy"
                        />
                        <h3>{ingredient.name}</h3>
                    </td>
                    <td>
                        <SvelteMarkdown source={ingredient.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
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
