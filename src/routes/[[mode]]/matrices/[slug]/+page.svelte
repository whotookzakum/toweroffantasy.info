<script>
    import SetItems from "$components/SetItems.svelte";
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import { bgImg } from "$lib/stores";
    import SvelteMarkdown from "svelte-markdown";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import MatrixMeta from "./MatrixMeta.svelte";
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    const { simulacrumV2, weapon, matrix, banners } = data;
    $bgImg = simulacrumV2?.assetsA0.titlePicture;
</script>

<Meta
    title="{matrix.name} Matrix | Tower of Fantasy Index"
    description="All about the matrix {matrix.name}, such as set effects and recommended weapon pairings."
    image={matrix.assets.iconLarge}
/>

<article>
    <aside>
        <div class="sticky">
            {#if simulacrumV2 || weapon}
                <AnchorLinks {simulacrumV2} {weapon} {matrix} />
            {/if}
        </div>
    </aside>

    <div class="article-content">
        <Ad unit="ArticleLB-mat1" />

        <GenericHeader
            h1="{matrix.name} (Matrix)"
            h1id="top"
            icon={matrix.assets.iconLarge}
            desc={matrix.description}
            rarity={matrix.rarity}
            imgStyle="transform: scale(1.3)"
        />

        {#if simulacrumV2 || weapon}
            <h2 style="font-size: var(--step-2)">Part of a set</h2>
            <SetItems {simulacrumV2} {weapon} {matrix} />
            <small style="color: var(--text2);"
                >Added in version {matrix.version}</small
            >
        {/if}

        <h2 id="effects">Set Effects</h2>
        <table class="borders bg-alternate" style="margin-block: 1rem">
            <thead>
                <tr>
                    <th>Pieces</th>
                    <th>Effect</th>
                </tr>
            </thead>
            <tbody>
                {#each matrix.sets as set}
                    <tr>
                        <td
                            style="color: var(--tier-s); font-weight: bold; font-size: var(--step-1);"
                            >{set.need}</td
                        >
                        <td><SvelteMarkdown source={set.description} /></td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <MatrixMeta {matrix} />

        {#if simulacrumV2}
            <h2 id="banners">Banners</h2>
        {/if}
    </div>
    {#if simulacrumV2}
        <BannerTable
            {banners}
            bannerSearchTerm={simulacrumV2.name}
            style="grid-column: 1/-1"
        />
    {/if}
</article>
