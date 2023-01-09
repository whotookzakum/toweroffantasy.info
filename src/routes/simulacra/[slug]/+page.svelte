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

    function getAvatarImg(data) {
        switch(data.name) {
            case "Nemesis":
                return `avatar_${data.cnName}`
            case "Frigg":
                return `Avatar12`
            case "Pepper":
                return `touxiang_susan`
            case "Hilda":
                return `touxiang_hilda`
            default:
                return `touxiang_${data.cnName}`
        }
    }

    function getElementColor(element) {
        switch(element) {
            case "volt": 
                return "#b769be"
            case "ice":
                return "#49a3d1"
            case "flame":
                return "#bb4033"
            case "physical":
                return "#d88c2a"
            case "altered": 
                return "#b0ffc3"
        }
    }
</script>

<svelte:head>
    <title>{data.name} | Tower of Fantasy Index</title>
    <meta name="description" content={`Information about the ${data.rarity} simulacrum ${data.name}; weapon advancements and abilities, simulacrum traits, and other miscellaneous information.`}>
    <meta property="og:title" content={data.name} />
    <meta
        property="og:description"
        content={`Information about the ${data.rarity} simulacrum ${data.name}; weapon advancements and abilities, simulacrum traits, and other miscellaneous information.`}
    />
    <meta
        property="og:image"
        content={`/images/Icon/Avatar/${getAvatarImg(data)}.png`}
    />
    <meta name="theme-color" content={getElementColor(data.weapon.element)} />
</svelte:head>

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