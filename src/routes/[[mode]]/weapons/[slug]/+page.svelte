<script>
    import SvelteMarkdown from "svelte-markdown";
    import SetItems from "$components/SetItems.svelte";
    import { bgImg } from "$lib/stores";
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import WeaponLevelSlider from "./WeaponLevelSlider.svelte";
    import WeaponStarSlider from "./WeaponStarSlider.svelte";
    import WeaponAttacks from "./WeaponAttacks.svelte";
    import Advancements from "./Advancements.svelte";
    import WeaponMeta from "./WeaponMeta.svelte";
    import UpgradeMats from "./UpgradeMats.svelte";
    import WeaponHeader from "./WeaponHeader.svelte";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    const simulacrumV2 = data.simulacrumV2;
    const matrix = data.matrix;
    const { weapon, banners } = data;
    $bgImg = simulacrumV2?.assetsA0.titlePicture;
</script>

<Meta
    title="{weapon.name} | Tower of Fantasy Index"
    description="All about the weapon {weapon.name}, such as advancements, stats, skills, upgrade materials, and banners."
    image={weapon.assets.icon}
/>

<article>
    <aside>
        <div class="sticky grid g-100">
            <AnchorLinks {simulacrumV2} {weapon} {matrix} />
            <div class="aside-extras grid g-100">
                <WeaponLevelSlider />
                <WeaponStarSlider />
            </div>
        </div>
    </aside>

    <div class="article-content">
        <Ad unit="ArticleLB-wep1" />

        <WeaponHeader {weapon} />
        <div class="mobile-only flex flex-wrap">
            <WeaponLevelSlider />
            <WeaponStarSlider />
        </div>

        {#if simulacrumV2 || matrix}
            <h2 style="font-size: var(--step-2);">Part of a set</h2>
            <SetItems {simulacrumV2} {weapon} {matrix} />
            <small style="color: var(--text2);"
                >Added in version {simulacrumV2.version}</small
            >
        {/if}

        <h2 id="effects">Weapon Effects</h2>
        {#if weapon.elementEffect}
            <h3 style:color="var(--element-{weapon.element})">
                {weapon.elementEffect.title}
            </h3>
            <SvelteMarkdown source={weapon.elementEffect.description} />
        {/if}

        {#if weapon.weaponEffects}
            {#each weapon.weaponEffects as effect}
                {#if effect.description !== "N/A" && effect.title !== "Unknown"}
                    <h3 style:color="var(--element-{weapon.element})">
                        {effect.title}
                    </h3>
                    <SvelteMarkdown source={effect.description} />
                {/if}
            {/each}
        {/if}

        {#if weapon.weaponAdvancements.length > 0}
            <Advancements advancements={weapon.weaponAdvancements} {weapon} />
        {/if}

        <Ad unit="ArticleLB-wep2" />

        <WeaponAttacks {weapon} {simulacrumV2} />

        <UpgradeMats levels={weapon.upgradeMats.levels} />

        <Ad unit="ArticleLB-wep3" />

        <WeaponMeta {weapon} />

        {#if weapon.banners.length > 0}
            <h2 id="banners">Banners</h2>
        {/if}
    </div>
    {#if simulacrumV2 && weapon.banners.length > 0}
        <BannerTable
            {banners}
            bannerSearchTerm={simulacrumV2.name}
            style="grid-column: 1/-1"
        />
    {/if}
</article>

<style lang="scss">
    :global(.mobile-only) {
        display: none;
        margin-block: 1rem;
        column-gap: 1rem;
        margin-bottom: -1.5rem;
    }

    :global(.mobile-only > *) {
        flex: 1;
        flex-basis: 300px;
    }

    @media (max-width: 860px) {
        :global(.mobile-only) {
            display: flex;
        }
    }
</style>
