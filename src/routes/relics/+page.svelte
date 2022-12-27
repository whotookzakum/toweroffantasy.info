<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";

    export let data;
    const relics = data.items;
</script>

<h1>Relics</h1>
<p>
    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
</p>

<h2><span style="color: var(--tier-s)">SSR</span> Relics</h2>
<Menu>
    {#each relics.filter((r) => r.rarity === "SSR") as relic}
        <MenuItem href={relic.path}>
            {#if relic.chinaOnly}
                <abbr class="absolute" title="China Exclusive" />
            {/if}
            <img
                src={`/images/UI/Artifact/icon/${relic.imgSrc}.png`}
                alt={relic.name}
                width="128"
                height="128"
            />
            <span>{relic.name}</span>
        </MenuItem>
    {/each}
</Menu>

<h2><span style="color: var(--tier-a)">SR</span> Relics</h2>
<Menu>
    {#each relics.filter((r) => r.rarity === "SR") as relic}
        <MenuItem href={relic.path}>
            {#if relic.chinaOnly}
                <abbr class="absolute" title="China Exclusive" />
            {/if}
            <img
                src={`/images/UI/Artifact/icon/${relic.imgSrc}.png`}
                alt={relic.name}
                width="128"
                height="128"
            />
            <span>{relic.name}</span>
        </MenuItem>
    {/each}
</Menu>