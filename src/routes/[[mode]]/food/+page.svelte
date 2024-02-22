<script>
    import Meta from "$components/Meta.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import ItemIcon from "$lib/components/ItemIcon.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import TypeFilters from "$components/Filters/TypeFilters.svelte";
    import { queryParameters, ssp } from "sveltekit-search-params";
    import TypeSelector from "$lib/components/Filters/TypeSelector.svelte";

    export let data;
    const { foods, items, allEffects } = data;
    const searchParams = queryParameters();

    $: entries = foods
        .filter((entry) => {
            const { q, rarity, effects, type, stars } = $searchParams;
            const searchMatch = q
                ? entry.name?.toLowerCase().includes(q.toLowerCase())
                : true;

            const rarityMatch = rarity
                ? rarity.split(" ").includes(entry.rarity.toString())
                : true;

            const effectsMatch = effects
                ? effects
                      .split(" ")
                      .some((effect) => entry.categories.includes(effect))
                : true;

            const typeMatch =
                type && type !== "all" ? entry.buff === type : true;

            const starsMatch =
                stars && stars !== "all" ? entry.stars == stars : true;

            return (
                searchMatch &&
                rarityMatch &&
                effectsMatch &&
                typeMatch &&
                starsMatch
            );
        })
        .toSorted((a, b) => a.rarity - b.rarity);
    // For testing multiple buff icons
    // .filter((entry) => entry.categories.length > 1);

    function getIngredientInfo(id) {
        return items.find((item) => item.id.toLowerCase() === id.toLowerCase());
    }
</script>

<Meta
    title="Food | Tower of Fantasy Index"
    description="Food can provide buffs and recover HP, satiety, and stamina. Satiety level determines how much HP you will passively recover while out of combat."
/>

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
<small>Hover or tap an ingredient icon to see how to acquire it.</small>

<div class="filters-row">
    <SearchBar />
    <TypeFilters type="rarity" />
    <TypeSelector originalData={foods} key="buff" />
    <TypeSelector
        originalData={foods}
        key="stars"
        selectorName="Stars"
        paramName="stars"
        defaultType={ssp.number()}
    />
    <div style="width: 100%">
        <TypeFilters type="effects" filters={allEffects} />
    </div>
</div>

<div class="grid g-100">
    <div class="table-wrapper" style="max-width: unset;">
        <table class="food-table bg-alternate">
            <thead>
                <tr>
                    <th>Dish</th>
                    <th>Recipe</th>
                </tr>
            </thead>
            <tbody>
                {#each entries as food (food.id)}
                    <tr>
                        <td>
                            <div class="flex g-100" style="align-items: center">
                                <div class="item-wrapper">
                                    <ItemIcon item={food} />
                                </div>
                                <div class="food-text">
                                    <small>{food.buff}</small>
                                    <h2>{food.name}</h2>
                                    <SvelteMarkdown
                                        source={food.effect ?? ""}
                                    />
                                    <p class="desc">{food.description}</p>
                                    <!-- {food.categories} -->
                                </div>
                            </div>
                        </td>
                        <td>
                            {#if food.ingredients}
                                <ul class="g-50" role="list">
                                    {#each food.ingredients as ingredient}
                                        <li class="flex g-100">
                                            <div class="item-wrapper">
                                                <ItemIcon
                                                    item={{
                                                        ...getIngredientInfo(
                                                            ingredient.matID,
                                                        ),
                                                        amount: ingredient.min,
                                                    }}
                                                    imgSize="48"
                                                    wrapperSize="48px"
                                                    isIngredient
                                                />
                                            </div>
                                            <span
                                                >{getIngredientInfo(
                                                    ingredient.matID,
                                                ).name}</span
                                            >
                                        </li>
                                    {/each}
                                </ul>
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style lang="scss">
    :global(.food-table .food-text p) {
        min-inline-size: 30ch;
    }

    .filters-row {
        margin-top: 0.5rem;
        padding: 1rem 0;
    }

    @media (min-width: 860px) {
        .filters-row {
            position: sticky;
            top: 93px;
            z-index: 1;
            background: var(--bg);
        }
    }

    h2 {
        font-size: var(--step-1);
        font-weight: 500;
        margin: 0;
        line-height: normal;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        align-content: center;
    }

    li {
        align-items: center;
    }

    .item-wrapper {
        width: fit-content;
    }

    .desc {
        font-size: var(--step--2);
        color: var(--text2);
        line-height: 1.4;
        display: none;
    }
</style>
