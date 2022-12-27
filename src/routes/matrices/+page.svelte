<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";

    export let data;
    const matrices = data.items;
</script>

<h1>Matrices</h1>
<p>
    Matrices (aka Chips) are items that can be attached to one of the four
    weapon slots (Emotion, Mind, Belief, and Memory) to provide stat boosts and
    special effects.
</p>
<p>
    Set effects will only be active when using the weapon that the matrices are
    attached to unless otherwise specified. Matrices can be strengthened similar
    to weapons, with each star unlocking higher values for the set effect.
</p>

<h2><span style="color: var(--tier-s)">SSR</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "SSR") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
            />
            <span>{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>

<h2><span style="color: var(--tier-a)">SR</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "SR") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
            />
            <span>{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>

<h2><span style="color: var(--tier-b)">R</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "R") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
            />
            <span>{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>

<h2><span style="color: var(--tier-c)">N</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "N") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
            />
            <span>{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>