<script>
    import SvelteMarkdown from "svelte-markdown";
    import SetItems from "$components/SetItems.svelte";
    import { bgImg } from "$lib/stores";
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import RarityIcon from "$components/EntryItem/RarityIcon.svelte";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import WeaponLevelSlider from "./WeaponLevelSlider.svelte";
    import WeaponStarSlider from "./WeaponStarSlider.svelte";
    import WeaponAttacks from "./WeaponAttacks.svelte";
    import Advancements from "./Advancements.svelte";
    import WeaponMeta from "./WeaponMeta.svelte";
    import UpgradeMats from "./UpgradeMats.svelte";
    import WeaponHeader from "./WeaponHeader.svelte";
    import Meta from "$components/Meta.svelte";

    export let data;
    const simulacrum_v2 = data.simulacrum_v2;
    const matrix = data.matrix;
    const { weapon, banners } = data;
    $bgImg = simulacrum_v2?.assetsA0.titlePicture;
</script>

<Meta
    title="{weapon.name} | Tower of Fantasy Index"
    description="All about the weapon {weapon.name}, such as advancements, stats, skills, upgrade materials, and banners."
    image={weapon.assets.icon}
/>

<article>
    <aside>
        <div class="sticky grid g-100">
            {#if simulacrum_v2 || matrix}
                <AnchorLinks {simulacrum_v2} {weapon} {matrix} />
            {/if}
            <div class="aside-extras grid g-100">
                <WeaponLevelSlider />
                <WeaponStarSlider />
            </div>
        </div>
    </aside>

    <div class="article-content">
        <WeaponHeader {weapon} />
        <div class="mobile-only flex flex-wrap">
            <WeaponLevelSlider />
            <WeaponStarSlider />
        </div>

        {#if simulacrum_v2 || matrix}
            <h2 style="font-size: var(--step-2);">Part of a set</h2>
            <SetItems {simulacrum_v2} {weapon} {matrix} />
            <small style="color: var(--text2);"
                >Added in version {simulacrum_v2.version}</small
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

        <Advancements advancements={weapon.weaponAdvancements} {weapon} />

        <WeaponAttacks weaponAttacks={weapon.weaponAttacks} />

        <UpgradeMats levels={weapon.upgradeMats.levels} />

        <WeaponMeta {weapon} />

        {#if weapon.banners.length > 0}
            <h2 id="banners">Banners</h2>
        {/if}
    </div>
    {#if simulacrum_v2 && weapon.banners.length > 0}
        <BannerTable
            {banners}
            bannerSearchTerm={simulacrum_v2.name}
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
