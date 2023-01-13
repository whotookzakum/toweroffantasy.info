<script>
    import { pipe, match } from "$lib/utils/";
    import ingredientsData from "$lib/data/food/ingredients.json";
    import dishesData from "$lib/data/food/dishes.json";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import { onMount } from "svelte";
    import AnchorJS from "anchor-js";
    import FoodFilters, {
        filters
    } from "$lib/components/food/FoodFilters.svelte";
    import Ad from "$lib/components/Ad.svelte";

    onMount(() => {
        const anchors = new AnchorJS();
        anchors.add("h3");
    });

    let dishes = dishesData;
    let ingredients = ingredientsData;
    let loading = false;

    // Filters are AND, i.e. volt ATK && rarity 4
    // They are not OR, i.e. volt ATK || rarity 4
    $: {
        loading = true;

        setTimeout(function updateDishes() {
            dishes = pipe(dishesData)(filterByRarity, filterByIcons);
            loading = false;
        }, 0);

        function filterByRarity(data) {
            return $filters.rarity?.length
                ? data.filter((dish) => $filters.rarity.includes(dish.rarity))
                : data;
        }

        function filterByIcons(data) {
            return data.filter((dish) =>
                satisfiesIconFilters(dish.icons, "buff", "recovery")
            );
        }
    }

    function satisfiesIconFilters(item, ...filterProps) {
        if (!item) return false;

        return match(true)
            .all(...filterProps.map(itemMatchesFilter))
            .toBoolean();

        function itemMatchesFilter(prop) {
            const isFilterUnset = !$filters[prop].length;
            if (isFilterUnset) return true;

            const isMatches = $filters[prop].some((filterSelection) =>
                item.includes(filterSelection)
            );
            return isMatches;
        }
    }

    // $: if (filters.buffFilters && filters.buffFilters.length > 0) {
    //     dishes = dishes.filter(
    //         (dish) =>
    //             dish.icons &&
    //             dish.icons.some((t) => filters.buffFilters.includes(t))
    //     );
    // }

    // $: if (filters.recoveryFilters && filters.recoveryFilters.length > 0) {
    //     dishes = dishes.filter(
    //         (dish) =>
    //             dish.icons &&
    //             dish.icons.some((t) => filters.recoveryFilters.includes(t))
    //     );
    // }
</script>

<svelte:head>
    <title>Food | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Food can provide buffs and recover HP, satiety, and stamina. Satiety level determines how much HP you will passively recover while out of combat."
    />
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

<FoodFilters />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="dishes">Dishes</h2>
{#await import("$lib/components/food/DishesTable.svelte") then { default: DishesTable }}
    <DishesTable {dishes} {loading} />
{/await}

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<h2 id="ingredients">Ingredients</h2>
{#await import("$lib/components/food/IngredientsTable.svelte") then { default: IngredientsTable }}
    <IngredientsTable {ingredients} />
{/await}
