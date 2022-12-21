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


<SectionNavigation links={["weapon", "advancements", "skills", "awakening", "other info"]} />

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