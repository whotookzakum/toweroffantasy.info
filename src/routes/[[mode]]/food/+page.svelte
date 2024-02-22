<script>
    import Meta from "$components/Meta.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import ItemIcon from "$lib/components/ItemIcon.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import TypeFilters from "$components/Filters/TypeFilters.svelte";
    import { queryParameters } from "sveltekit-search-params";
    import TypeSelector from "$lib/components/Filters/TypeSelector.svelte";

    export let data;
    const { foods, items, allEffects } = data;
    const searchParams = queryParameters();

    $: entries =
        foods
            .filter((entry) => {
                const { q, rarity, effects, type } = $searchParams;
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

                return searchMatch && rarityMatch && effectsMatch && typeMatch;
            })
            .toSorted((a, b) => a.rarity - b.rarity)
            .filter((entry) => entry.categories.length > 1);

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

<div class="filters-row">
    <SearchBar />
    <TypeFilters type="rarity" />
    <TypeFilters type="effects" filters={allEffects} />
    <TypeSelector originalData={foods} key="buff" />
</div>

<table class="food-table bg-alternate">
    <thead>
        <tr>
            <th>Dish</th>
            <th>Recipe</th>
        </tr>
    </thead>
    <tbody>
        {#each entries as food}
            <tr>
                <td>
                    <div class="flex g-100" style="align-items: center">
                        <div class="item-wrapper">
                            <ItemIcon item={food} />
                            <!-- {food.categories} -->
                        </div>
                        <div>
                            <small>{food.buff}</small>
                            <h2>{food.name}</h2>
                            <SvelteMarkdown source={food.effect ?? ""} />
                            <p class="desc">{food.description}</p>
                            {food.categories}
                        </div>
                    </div>
                </td>
                <td>
                    {#if food.ingredients}
                        <ul role="list">
                            {#each food.ingredients as ingredient}
                                <li
                                    class="flex g-100"
                                    style="align-items: center"
                                >
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
                                        />
                                    </div>
                                    {getIngredientInfo(ingredient.matID).name}
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    table {
        margin: 1rem 0;
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
        gap: unset;
    }

    .item-wrapper {
        width: fit-content;
        margin-bottom: 0.5rem;
    }

    .desc {
        font-size: var(--step--2);
        color: var(--text2);
        line-height: 1.4;
        display: none;
    }
</style>
