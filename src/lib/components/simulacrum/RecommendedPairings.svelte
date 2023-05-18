<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    export let weapon;
</script>

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