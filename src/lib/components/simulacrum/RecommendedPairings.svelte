<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    export let weapon;
</script>

<h3>Recommended Pairings</h3>
<Menu>
    {#each weapon.recommendedPairings as recWep}
        <MenuItem href={recWep.pathToSimulacrum}>
            <img
                src={`/images/Icon/weapon/Icon/${recWep.imgSrc}.webp`}
                alt={recWep.wepName}
                width="128"
                height="128"
                loading="lazy"
            />
            {#if recWep.isMeta}
                <abbr class="absolute" title="Meta"/>
            {/if}
            <span class="menu-item-name">{recWep.wepName}</span>
            <div class="type-and-element">
                <CategoryIcon type={recWep.wepType} width={30} />
                <CategoryIcon type={recWep.wepElement} width={30} />
            </div>
        </MenuItem>
    {/each}
</Menu>

<style lang="scss">
    .type-and-element {
        display: flex;
        margin-bottom: 1rem;
    }

    .menu-item-name {
        padding-bottom: 0.4rem;
    }
</style>