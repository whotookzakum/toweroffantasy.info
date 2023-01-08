<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Avatar from "$lib/components/simulacrum/Avatar.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import SimulacrumFilters from "$lib/components/simulacrum/SimulacrumFilters.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
    let simulacra = data.items;

    let filters = {};

    // Alternative https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions

    $: simulacra = data.items.filter(({ weapon }) => {
        for (let key in filters.weapon) {
            if (filters.weapon[key] === undefined || filters.weapon.length === 0) return false;
            return filters.weapon[key].includes(weapon[key])
        }
    })

    // $: simulacra = data.items.filter(({weapon}) => filters.weapon?.type.includes(weapon.type) || filters.weapon?.element.includes(weapon.element))

    // $: simulacra = data.items.filter(({weapon}) => {
    //     if (!(filters.weapon?.type.length > 0) && !(filters.weapon?.element.length > 0)) return true;
    //     return filters.weapon?.type.includes(weapon.type) || filters.weapon?.element.includes(weapon.element)
    // })

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

    // $: simulacra = data.items
    //     .filter(({ weapon }) => {
    //         for (let key in filters.weapon) {
    //             if (!(filters.weapon?.[key].length > 0)) return false
    //         }
    //         return filters.weapon?.[key].includes(weapon.element)
    //     });

    // $: if (filters.typeFilters && filters.typeFilters.length > 0) {
    //     simulacra = data.items.filter((sim) =>
    //         filters.typeFilters.includes(sim.weapon.type)
    //     );
    // } else {
    //     simulacra = data.items;
    // }

    // $: if (filters.elementFilters && filters.elementFilters.length > 0) {
    //     simulacra = simulacra.filter((sim) =>
    //         filters.elementFilters.includes(sim.weapon.element)
    //     );
    // }
</script>

<SectionNavigation links={["ssr", "sr"]} />

<h1>Simulacra</h1>
<p>
    Simulacra (aka Mimics) are the player's representation of the characters
    found in Tower of Fantasy. They have an associated weapon and an optional
    passive effect. Their associated matrices must be obtained separately.
</p>

<SimulacrumFilters bind:filters />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="ssr"><span style="color: var(--tier-s)">SSR</span> Simulacra</h2>
<Menu>
    {#each simulacra.filter((s) => s.rarity === "SSR") as simulacrum}
        <MenuItem href={simulacrum.path} chinaOnly={simulacrum.chinaOnly}>
            {#if filters.showWeapon}
                <img
                    src={`/images/Icon/weapon/Icon/${simulacrum.weapon.imgSrc}.png`}
                    alt={simulacrum.weapon.name}
                    width="128"
                    height="128"
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
            {#if filters.showWeapon}
                <img
                    src={`/images/Icon/weapon/Icon/${simulacrum.weapon.imgSrc}.png`}
                    alt={simulacrum.weapon.name}
                    width="128"
                    height="128"
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
