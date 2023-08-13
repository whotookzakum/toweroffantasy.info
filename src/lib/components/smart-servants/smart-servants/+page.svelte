<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import ServantFilters from "$lib/components/smart-servants/ServantFilters.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
    let servants = data.items;
    let filters = {};

    $: servants = data.items
        .filter(
            ({ servant }) =>
                !(filters.servant?.type.length > 0) ||
                filters.servant?.type.includes(servant.type)
        )
        .filter(
            ({ servant }) =>
                !(filters.servant?.element.length > 0) ||
                filters.servant?.element.includes(servant.element)
        );
</script>

<svelte:head>
    <title>Smart Servants | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Smart Servants are small robots that aid the player in combat."
    />
    <meta property="og:title" content="Smart Servants" />
    <meta
        property="og:description"
        content="Smart Servants are small robots that aid the player in combat."
    />
    <meta
        property="og:image"
        content={`/images/UI/PetFight/icon/LH_FightPet_2.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation />

<h1>Smart Servants</h1>
<p>
    Smart Servants are small robots that aid the player in combat. They have an ATK value based on the player's ATK, and have 3 different skills. The player can obtain modules or advance the servant to boost it's performance.
</p>

<!-- <ServantFilters bind:filters /> -->

<Ad unit="Banner1" />

<Menu>
    {#each servants as servant}
        <MenuItem href={servant.path} chinaOnly={servant.chinaOnly}>
            <img
                src={`/images/UI/PetFight/icon/${servant.imgSrc}.webp`}
                alt={servant.name}
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">{servant.name}</span>
            <div class="type-and-element">
                <CategoryIcon type={servant.type} width={30} />
                <CategoryIcon type={servant.element} width={30} />
            </div>
        </MenuItem>
    {/each}
</Menu>
