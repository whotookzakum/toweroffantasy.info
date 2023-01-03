<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Avatar from "$lib/components/simulacrum/Avatar.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import SimulacrumFilters from "$lib/components/simulacrum/SimulacrumFilters.svelte";

    export let data;
    let simulacra = data.items;

    let filters = {};

    $: if (filters.typeFilters && filters.typeFilters.length > 0) {
        simulacra = data.items.filter((sim) =>
            filters.typeFilters.includes(sim.weapon.type)
        );
    } else {
        simulacra = data.items;
    }

    $: if (filters.elementFilters && filters.elementFilters.length > 0) {
        simulacra = simulacra.filter((sim) =>
            filters.elementFilters.includes(sim.weapon.element)
        );
    }
</script>

<h1>Simulacra</h1>
<p>
    Simulacra (aka Mimics) are the player's representation of the characters
    found in Tower of Fantasy. They have an associated weapon and an optional
    passive effect. Their associated matrices must be obtained separately.
</p>

<SimulacrumFilters bind:filters />

<h2><span style="color: var(--tier-s)">SSR</span> Simulacra</h2>

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

<h2><span style="color: var(--tier-a)">SR</span> Simulacra</h2>
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
