<script>
    import Abilities from "$lib/components/simulacrum/Abilities.svelte";
    import Advancements from "$lib/components/simulacrum/Advancements.svelte";
    import UpgradeMaterials from "$lib/components/simulacrum/UpgradeMaterials.svelte";
    import WeaponEffects from "$lib/components/simulacrum/WeaponEffects.svelte";
    import WeaponHeader from "$lib/components/simulacrum/WeaponHeader.svelte";
    import RecommendedMatrices from "$lib/components/simulacrum/RecommendedMatrices.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import OtherInfo from "$lib/components/simulacrum/OtherInfo.svelte";
    import AwakeningGifts from "$lib/components/simulacrum/AwakeningGifts.svelte";
    import AwakeningTraits from "$lib/components/simulacrum/AwakeningTraits.svelte";
    import Ad from "$lib/components/Ad.svelte";

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
<WeaponEffects weapon={data.weapon} rarity={data.rarity}/>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<Advancements weapon={data.weapon} />

<Ad unit="lb3" />
<Ad unit="mobile_lb1" />

<Abilities weapon={data.weapon} />

<Ad unit="lb4" />
<Ad unit="mobile_mpu2" />

<UpgradeMaterials weapon={data.weapon} />
<RecommendedMatrices weapon={data.weapon} />

<Ad unit="lb5" />
<Ad unit="mobile_lb3" />

<h2 id="awakening">Awakening</h2>
<AwakeningTraits traits={data.traits} />

<Ad unit="mobile_lb4" />

<AwakeningGifts gifts={data.bestGifts} categories={data.giftTypes} />

<h2 id="other-info">Other Info</h2>
<OtherInfo simulacrum={data} />

<Ad unit="mobile_lb5" />