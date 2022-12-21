<script>
    import Abilities from "$lib/components/weapon/Abilities.svelte";
    import Advancements from "$lib/components/weapon/Advancements.svelte";
    import UpgradeMaterials from "$lib/components/weapon/UpgradeMaterials.svelte";
    import WeaponEffects from "$lib/components/weapon/WeaponEffects.svelte";
    import WeaponHeader from "$lib/components/weapon/WeaponHeader.svelte";
    import RecommendedMatrices from "$lib/components/weapon/RecommendedMatrices.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
</script>

<SectionNavigation
    links={["weapon", "advancements", "skills", "awakening", "other info"]}
/>

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    {data.rarity} Simulacrum
</span>

<h2 id="weapon">Weapon</h2>
<WeaponHeader weapon={data.weapon} />
<WeaponEffects weapon={data.weapon} />
<Advancements weapon={data.weapon} />
<Abilities weapon={data.weapon} />
<UpgradeMaterials weapon={data.weapon} />
<RecommendedMatrices weapon={data.weapon} />

<h2 id="awakening">Awakening</h2>

<h2 id="other-info">Other Info</h2>
<div class="bio-wrapper full-bleed">
    <div>
        <div>{data.bio.gender}</div>
        <div>{data.bio.height}</div>
        <div>{data.bio.birthplace}</div>
        <div>{data.bio.horoscope}</div>
        <div>{data.bio.birthday}</div>
    </div>
    <img class="chart" style="width: 100%" src={`/images/UI/shizhuang/nitai/xiangqing/wuwei/wuwei_imitation_${data.id}.png`} alt="" width="678" height="367">
</div>

<style lang="scss">
    .bio-wrapper {
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 2rem;
        background-color: var(--surface2);
        margin-top: var(--space-xs);

        img {
            max-width: 500px;
            height: auto;
        }
    }
</style>