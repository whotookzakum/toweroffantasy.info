<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
    const mounts = data.items;
</script>

<svelte:head>
    <title>Mounts | Tower of Fantasy Index</title>
    <meta name="description" content="Mounts are vehicles that help you traverse terrain more quickly. All mounts move at the same speed. Owning multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels.">
    <meta property="og:title" content="Mounts" />
    <meta
        property="og:description"
        content="Mounts are vehicles that help you traverse terrain more quickly. All mounts move at the same speed. Owning multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels."
    />
    <meta
        property="og:image"
        content={`/images/UI/Mount/${mounts[0].imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation links={["underwater", "land"]} />

<h1>Mounts</h1>
<p>
    All mounts move at the same speed. Owning multiple mounts can unlock achievements,
    and maintaining mounts will reward you with dark crystals. Some mounts have
    different colors available at certain levels.
</p>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="underwater">Underwater mounts</h2>
<Menu>
    {#each mounts.filter(m => m.type === "Water") as mount}
        <MenuItem href={mount.path} chinaOnly={mount.chinaOnly}>
            <img
                src={`/images/UI/Mount/${mount.imgSrc}.png`}
                alt={mount.name}
                width="308"
                height="206"
                loading="lazy"
            />
            <span>{mount.name}</span>
        </MenuItem>
    {/each}
</Menu>

<h2 id="land">Land mounts</h2>
<Menu>
    {#each mounts.filter(m => m.type !== "Water") as mount}
        <MenuItem href={mount.path} chinaOnly={mount.chinaOnly}>
            <img
                src={`/images/UI/Mount/${mount.imgSrc}.png`}
                alt={mount.name}
                width="308"
                height="206"
                loading="lazy"
            />
            <span>{mount.name}</span>
        </MenuItem>
    {/each}
</Menu>

<style lang="scss">
    img {
        // margin-top: 1rem;
        width: 140%;
        height: auto;
    }
</style>
