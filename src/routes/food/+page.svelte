<script>
    import ingredientsData from "$lib/data/food/ingredients.json";
    import dishesData from "$lib/data/food/dishes.json";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import DishesTable from "$lib/components/food/DishesTable.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import AnchorJS from "anchor-js";
    import FoodFilters, {
        filters
    } from "$lib/components/food/FoodFilters.svelte";
    import Ad from "$lib/components/Ad.svelte";

    let dishes;
    let ingredients = ingredientsData;
    let loading = true;

    onMount(() => {
        const anchors = new AnchorJS();
        anchors.add("h3");
    });

    // Filters are AND, i.e. volt ATK && rarity 4
    // They are not OR, i.e. volt ATK || rarity 4
    $: {
        setTimeout(() => {
            dishes = dishesData
                .filter(filterByRarity)
                .filter(filterByIcon("buff"))
                .filter(filterByIcon("recovery"));
            loading = false;
        }, 0);

        function filterByRarity(item) {
            if (!$filters.rarity.length) return true;
            return $filters.rarity.includes(item.rarity);
        }

        function filterByIcon(icon) {
            return (item) => {
                if (!$filters[icon].length) return true;
                return $filters[icon].some((icon) =>
                    item.icons?.includes(icon)
                );
            };
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

    function scrollToIngredient() {
        try {
            document.querySelector($page.url.hash).scrollIntoView();
        } catch {
            return;
        }
    }
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
<DishesTable {dishes} {loading} />

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<h2 id="ingredients">Ingredients</h2>
{#await import("$lib/components/food/IngredientsTable.svelte") then { default: IngredientsTable }}
    <IngredientsTable {ingredients} on:mount={scrollToIngredient} />
{/await}
