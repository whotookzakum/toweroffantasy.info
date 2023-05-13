<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    export let weapon;
</script>

<div class="table-wrapper">
    <table class="bg-alternate">
        <tbody>
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
                        {#if recWep.meta}
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
            <!-- {#each weapon.recommendedPairings as recWep}
                <tr>
                    <th>
                        <div class="link-wrapper">
                            <a
                                class="matrix-link"
                                href={recWep.pathToSimulacrum}
                            >
                                <div class="img-wrapper">
                                    <img
                                        src={`/images/Icon/weapon/Icon/${recWep.imgSrc}.webp`}
                                        alt={recWep.wepName}
                                        width="128"
                                        height="128"
                                        loading="lazy"
                                    />
                                    {#if recWep.chinaOnly}
                                        <abbr
                                            title="China Exclusive"
                                            class="absolute"
                                        >
                                        </abbr>
                                    {/if}
                                    {#if recWep.meta}
                                        <div class="stat">
                                            <i
                                                class="stat-tier"
                                            >
                                                META
                                            </i>
                                        </div>
                                    {/if}
                                </div>
                                <span>{recWep.wepName}</span>
                            </a>
                        </div>
                    </th>
                    <td><SvelteMarkdown source={recWep.description} /></td>
                </tr>
            {/each} -->
        </tbody>
    </table>
</div>