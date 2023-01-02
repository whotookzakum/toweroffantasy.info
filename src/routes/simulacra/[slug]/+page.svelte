<script>
    import Abilities from "$lib/components/simulacrum/Abilities.svelte";
    import Advancements from "$lib/components/simulacrum/Advancements.svelte";
    import UpgradeMaterials from "$lib/components/simulacrum/UpgradeMaterials.svelte";
    import WeaponEffects from "$lib/components/simulacrum/WeaponEffects.svelte";
    import WeaponHeader from "$lib/components/simulacrum/WeaponHeader.svelte";
    import RecommendedMatrices from "$lib/components/simulacrum/RecommendedMatrices.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import OtherInfo from "$lib/components/simulacrum/OtherInfo.svelte";

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
<OtherInfo simulacrum={data} />
{#if data.banners}
    <h3>Banners</h3>

    {#if data.banners.glob}
        <h4>Global</h4>
        {#each data.banners.glob as banner, index}
            <span
                >{banner.start} - {banner.end}
                {#if index > 0}
                    (Rerun)
                {/if}
            </span>
        {/each}
    {/if}

    <h4>China</h4>
    {#each data.banners.cn as banner, index}
        <span
            >{banner.start} - {banner.end}
            {#if index > 0}
                (Rerun)
            {/if}
        </span>
    {/each}
{/if}
