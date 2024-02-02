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

    export let data;
    const { weapon, simulacrum_v2, matrix, banners } = data;
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
        <WeaponHeader {weapon} />
        <h1>{weapon.name}</h1>
        <h2 style="font-size: var(--step-2); margin: 0">Part of a set</h2>
        <SetItems {simulacrum_v2} {weapon} {matrix} />
        <small style="color: var(--text2);"
            >Released in version {simulacrum_v2.version}</small
        >

        <h2 id="effects">Weapon Effects</h2>
        <h3 style:color="var(--element-{weapon.element})">
            {weapon.elementEffect?.title}
        </h3>
        <SvelteMarkdown source={weapon.elementEffect?.description} />

        {#if weapon.weaponEffects}
            {#each weapon.weaponEffects as effect}
                <h3 style:color="var(--element-{weapon.element})">
                    {effect.title}
                </h3>
                <SvelteMarkdown source={effect.description} />
            {/each}
        {/if}

        <Advancements advancements={weapon.weaponAdvancements} {weapon} />

        <WeaponAttacks weaponAttacks={weapon.weaponAttacks} />

        <UpgradeMats items={weapon.upgradeMats.items} />

        <WeaponMeta {weapon} />

        {#if weapon.banners.length > 0}
            <h2 id="banners">Banners</h2>
        {/if}
    </div>
    {#if weapon.banners.length > 0}
        <BannerTable
            {banners}
            bannerSearchTerm={simulacrum_v2.name}
            style="grid-column: 1/-1"
        />
    {/if}
</article>
