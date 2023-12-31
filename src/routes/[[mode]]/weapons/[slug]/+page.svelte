<script>
    import SvelteMarkdown from "svelte-markdown";
    import SetItems from "$components/SetItems.svelte";
    import WeaponAttack from "./Skill.svelte";
    import { weaponLevel, weaponStars, bgImg } from "$lib/stores";
    import Tier from "$components/EntryItem/Tier.svelte";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import Youtube from "$components/Youtube.svelte";
    import Rating from "$components/simulacrum/Rating.svelte";
    import RarityIcon from "$components/EntryItem/RarityIcon.svelte";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import WeaponLevelSlider from "./WeaponLevelSlider.svelte";
    import WeaponStarSlider from "./WeaponStarSlider.svelte";
    import WeaponAttacks from "./WeaponAttacks.svelte";
    import EntryItem from "../../../../lib/components/EntryItem/EntryItem.svelte";

    export let data;
    const { weapon, simulacrum_v2, matrix, banners } = data;

    console.log(weapon.meta)
    $bgImg = simulacrum_v2.assetsA0.titlePicture;
</script>

<article>
    <aside>
        <div class="sticky grid g-100">
            <AnchorLinks {simulacrum_v2} {weapon} {matrix} />
            <div class="grid g-100">
                <WeaponLevelSlider />
                <WeaponStarSlider />
            </div>
        </div>
    </aside>

    <div class="article-content">
        <h1>{weapon.name}</h1>
        <p><RarityIcon rarity={weapon.rarity} /> Weapon</p>

        

        <h2 id="effects">Weapon Effects</h2>
        <span>{weapon.elementEffect.title}</span>
        <SvelteMarkdown source={weapon.elementEffect.description} />

        {#if weapon.weaponEffects}
            {#each weapon.weaponEffects as effect}
                <span>{effect.title}</span>
                <SvelteMarkdown source={effect.description} />
            {/each}
        {/if}

        {#if weapon.weaponAdvancements}
            <h2 id="advancements">Advancements</h2>
            {#each weapon.weaponAdvancements as advancement}
                <SvelteMarkdown source={advancement.description} />
            {/each}
        {/if}

        <WeaponAttacks {weapon} />
        

        <h2 id="meta">Meta</h2>

        {#if weapon.meta?.analyticVideoId}
            <h3>Analysis</h3>
            <Youtube source={weapon.meta.analyticVideoId} />
        {/if}

        {#if weapon.meta?.rating}
            <h3>Rating</h3>
            <Rating {weapon} />
        {/if}

        {#if weapon.meta?.recommendedPairings}
            <h3>Recommended Pairings</h3>
            <ul class="entry-list">
                {#each weapon.meta.recommendedPairings as recWep}
                    <EntryItem entry={recWep} />
                {/each}
            </ul>
        {/if}

        {#if weapon.meta?.recommendedMatrices}
            <h3>Recommended Matrices</h3>
            <ul class="entry-list">
                {#each weapon.meta.recommendedMatrices as recMatrix}
                    <EntryItem entry={recMatrix} matrixPieces={recMatrix.pieces} />
                {/each}
            </ul>
        {/if}

        <h2 id="banners">Banners</h2>
    </div>
    <BannerTable
        {banners}
        bannerSearchTerm={simulacrum_v2.name}
        style="grid-column: 1/-1"
    />
</article>

<style lang="scss">
    .stats {
        display: grid;
        // grid-template-columns: 12ch 12ch;
        width: fit-content;
        padding: 0;
        margin: 0;
    }

    .stat {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        line-height: 1.2;

        .stat-text {
            display: grid;
        }

        .stat-name {
            color: var(--text2);
            font-size: var(--step--2);
        }

        .stat-value {
            text-transform: uppercase;
        }
    }

    .invert {
        // filter: brightness(0) invert(1);
        filter: brightness(4);
    }
</style>
