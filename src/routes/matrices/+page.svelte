<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
    const matrices = data.items;
</script>

<svelte:head>
    <title>Matrices | Tower of Fantasy Index</title>
    <meta name="description" content="Matrices (aka Chips) are items that can be attached to one of the four weapon slots (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects.">
    <meta property="og:title" content="Matrices" />
    <meta
        property="og:description"
        content="Matrices (aka Chips) are items that can be attached to one of the four weapon slots (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects."
    />
    <meta
        property="og:image"
        content={`/images/Icon/yizhi/256/${matrices[0].imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation links={["ssr", "sr", "r", "n"]} />

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

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="ssr"><span style="color: var(--tier-s)">SSR</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "SSR") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<h2 id="sr"><span style="color: var(--tier-a)">SR</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "SR") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>

<Ad unit="lb4" />
<Ad unit="mobile_lb1" />
<Ad unit="mobile_lb3" />

<h2 id="r"><span style="color: var(--tier-b)">R</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "R") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>

<Ad unit="lb5" />
<Ad unit="mobile_lb4" />
<Ad unit="mobile_lb5" />

<h2 id="n"><span style="color: var(--tier-c)">N</span> Matrices</h2>
<Menu>
    {#each matrices.filter((m) => m.rarity === "N") as matrix}
        <MenuItem href={matrix.path} chinaOnly={matrix.chinaOnly}>
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                alt={matrix.name}
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">{matrix.name}</span>
        </MenuItem>
    {/each}
</Menu>

<style lang="scss">
    img {
        width: 110%;
        margin: -1rem;
        height: auto;
    }
</style>