<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Avatar from "$lib/components/simulacrum/Avatar.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import SimulacrumFilters, {
        filters
    } from "$lib/components/simulacrum/SimulacrumFilters.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
    let simulacra = data.items;

    $: {
        simulacra = data.items
            .filter(filterBy("type"))
            .filter(filterBy("element"));

        function filterBy(prop) {
            return (item) => {
                if (!$filters.weapon[prop].length) return true;
                return $filters.weapon[prop].includes(item.weapon[prop]);
            };
        }
    }

    // Reference https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions

    // AND filters
    // If filter is unset, return every value, else return whether the simulacrum passes the filter or not
    // $: simulacra = data.items
    //     .filter(
    //         ({ weapon }) =>
    //             !(filters.weapon?.type.length > 0) ||
    //             filters.weapon?.type.includes(weapon.type)
    //     )
    //     .filter(
    //         ({ weapon }) =>
    //             !(filters.weapon?.element.length > 0) ||
    //             filters.weapon?.element.includes(weapon.element)
    //     );

    // OR filters
    // $: simulacra = data.items.filter(({weapon}) => {
    //     if (!(filters.weapon?.type.length > 0) && !(filters.weapon?.element.length > 0)) return true;
    //     return filters.weapon?.type.includes(weapon.type) || filters.weapon?.element.includes(weapon.element)
    // })
</script>

<svelte:head>
    <title>Simulacra | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
    />
    <meta property="og:title" content="Simulacra" />
    <meta
        property="og:description"
        content="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."
    />
    <meta
        property="og:image"
        content={`/images/Icon/Avatar/touxiang_${data.items[0].cnName}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation links={["ssr", "sr"]} />

<h1>Simulacra</h1>
<p>
    Simulacra (aka Mimics) are the player's representation of the characters
    found in Tower of Fantasy. They have an associated weapon and an optional
    passive effect. Their associated matrices must be obtained separately.
</p>

<SimulacrumFilters />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="ssr"><span style="color: var(--tier-s)">SSR</span> Simulacra</h2>
<Menu>
    {#each simulacra.filter((s) => s.rarity === "SSR") as simulacrum}
        <MenuItem href={simulacrum.path} chinaOnly={simulacrum.chinaOnly}>
            {#if $filters.display === "Weapon"}
                <img
                    src={`/images/Icon/weapon/Icon/${simulacrum.weapon.imgSrc}.png`}
                    alt={simulacrum.weapon.name}
                    width="128"
                    height="128"
                    loading="lazy"
                />
                <span>{simulacrum.weapon.name}</span>
            {:else}
                <Avatar name={simulacrum.name} cnName={simulacrum.cnName} />
                <span>{simulacrum.name}</span>
            {/if}
            <div class="type-and-element">
                <CategoryIcon type={simulacrum.weapon.type} width={30} />
                <CategoryIcon type={simulacrum.weapon.element} width={30} />
            </div>
        </MenuItem>
    {/each}
</Menu>

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<h2 id="sr"><span style="color: var(--tier-a)">SR</span> Simulacra</h2>
<Menu>
    {#each simulacra.filter((s) => s.rarity === "SR") as simulacrum}
        <MenuItem href={simulacrum.path} chinaOnly={simulacrum.chinaOnly}>
            {#if $filters.display === "Weapon"}
                <img
                    src={`/images/Icon/weapon/Icon/${simulacrum.weapon.imgSrc}.png`}
                    alt={simulacrum.weapon.name}
                    width="128"
                    height="128"
                    loading="lazy"
                />
                <span>{simulacrum.weapon.name}</span>
            {:else}
                <Avatar name={simulacrum.name} cnName={simulacrum.cnName} />
                <span>{simulacrum.name}</span>
            {/if}
            <div class="type-and-element">
                <CategoryIcon type={simulacrum.weapon.type} width={30} />
                <CategoryIcon type={simulacrum.weapon.element} width={30} />
            </div>
        </MenuItem>
    {/each}
</Menu>

<style lang="scss">
    .type-and-element {
        display: flex;
        margin-bottom: 1rem;
    }
</style>
