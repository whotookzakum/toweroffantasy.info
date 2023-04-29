<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
    const relics = data.items;
</script>

<svelte:head>
    <title>Relics | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Relics (aka Gadgets) are tools that aid the player in exploration or combat."
    />
    <meta property="og:title" content="Relics" />
    <meta
        property="og:description"
        content="Relics (aka Gadgets) are tools that aid the player in exploration or combat."
    />
    <meta
        property="og:image"
        content={`/images/UI/Artifact/icon/${relics[0].imgSrc}.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation links={["ssr", "sr"]} />

<h1>Relics</h1>
<p>
    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
</p>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="ssr"><span style="color: var(--tier-s)">SSR</span> Relics</h2>
<Menu>
    {#each relics.filter((r) => r.rarity === "SSR") as relic}
        <MenuItem href={relic.path} chinaOnly={relic.chinaOnly}>
            <img
                src={`/images/UI/Artifact/icon/${relic.imgSrc}.webp`}
                alt={relic.name}
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">{relic.name}</span>
        </MenuItem>
    {/each}
</Menu>

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<h2 id="sr"><span style="color: var(--tier-a)">SR</span> Relics</h2>
<Menu>
    {#each relics.filter((r) => r.rarity === "SR") as relic}
        <MenuItem href={relic.path} chinaOnly={relic.chinaOnly}>
            <img
                src={`/images/UI/Artifact/icon/${relic.imgSrc}.webp`}
                alt={relic.name}
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">{relic.name}</span>
        </MenuItem>
    {/each}
</Menu>
