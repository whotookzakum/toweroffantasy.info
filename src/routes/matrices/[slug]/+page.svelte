<script>
    import SvelteMarkdown from "svelte-markdown";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Ad from "$lib/components/Ad.svelte";
    export let data;

    function getSet(simulacrum) {
        return simulacrum.weapon.recommendedMatrices.find(
            (set) => set.name === data.name
        ).pieces;
    }
</script>

<svelte:head>
    <title>{data.name} Matrix | Tower of Fantasy Index</title>
    <meta name="description" content={`Information about the ${data.rarity} matrix ${data.name}; set effects and recommended weapon pairings.`}>
    <meta property="og:title" content={`${data.name} Matrix`} />
    <meta
        property="og:description"
        content={`Information about the ${data.rarity} matrix ${data.name}; set effects and recommended weapon pairings.`}
    />
    <meta
        property="og:image"
        content={`/images/Icon/yizhi/256/${data.imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation />

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    {data.rarity} Matrices
</span>

<h2 id="sets">Sets</h2>
<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Pieces</th>
            <th>Effect</th>
        </thead>
        <tbody>
            {#each data.sets as set, index}
                <tr>
                    <th style="color: var(--tier-s)">{set.pieces}</th>
                    <td><SvelteMarkdown source={set.description} /></td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

{#if data.matchingSimulacra.length > 0}
    <h2>Recommended Pairings</h2>
    <Menu>
        {#each data.matchingSimulacra as simulacrum}
            <MenuItem href={simulacrum.path} chinaOnly={simulacrum.chinaOnly}>
                <img
                    src={`/images/Icon/weapon/Icon/${simulacrum.weapon.imgSrc}.png`}
                    alt={simulacrum.weapon.name}
                    width="128"
                    height="128"
                />
                <abbr
                    class="matrix-set absolute"
                    title={`${getSet(simulacrum)}-piece set of ${
                        data.name
                    } matrices`}>{getSet(simulacrum)}-set</abbr
                >
                <span>{simulacrum.weapon.name}</span>
            </MenuItem>
        {/each}
    </Menu>
{/if}

<style lang="scss">
    abbr.matrix-set {
        left: unset;
        right: 0;
        background: rgb(42, 129, 179);
        padding: 0.2em 0.42em 0.2em 0.36em;
        display: inline-block;
        font-size: var(--step--2);
        font-weight: 600;
    }

    abbr[title*="4-piece"] {
        background: rgb(179, 42, 111);
    }
</style>
