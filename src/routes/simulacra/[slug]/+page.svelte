<script>
    import Abilities from "$lib/components/simulacrum/Abilities.svelte";
    import Advancements from "$lib/components/simulacrum/Advancements.svelte";
    import Advice from "../../../lib/components/simulacrum/Advice.svelte";
    import UpgradeMaterials from "$lib/components/simulacrum/UpgradeMaterials.svelte";
    import WeaponEffects from "$lib/components/simulacrum/WeaponEffects.svelte";
    import WeaponHeader from "$lib/components/simulacrum/WeaponHeader.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import OtherInfo from "$lib/components/simulacrum/OtherInfo.svelte";
    import AwakeningGifts from "$lib/components/simulacrum/AwakeningGifts.svelte";
    import AwakeningTraits from "$lib/components/simulacrum/AwakeningTraits.svelte";
    import UnreleasedWarning from "$lib/components/UnreleasedWarning.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import _ from "lodash";
    import SvelteMarkdown from "svelte-markdown";

    export let data;

    $: globalData = data;
    $: chinaData = _.merge(_.cloneDeep(data), data.cnData);
    $: simulacrum = globalData;

    function getAvatarImg(simulacrum) {
        switch (simulacrum.name) {
            case "Nemesis":
                return `avatar_${simulacrum.cnName}`;
            case "Frigg":
                return `Avatar12`;
            case "Pepper":
                return `touxiang_susan`;
            case "Hilda":
                return `touxiang_hilda`;
            default:
                return `touxiang_${simulacrum.cnName}`;
        }
    }

    function getElementColor(element) {
        switch (element) {
            case "volt":
                return "#b769be";
            case "ice":
                return "#49a3d1";
            case "flame":
                return "#bb4033";
            case "physical":
                return "#d88c2a";
            case "altered":
                return "#b0ffc3";
        }
    }
</script>

<svelte:head>
    <title>{globalData.name} | Tower of Fantasy Index</title>
    <meta
        name="description"
        content={`Information about the ${simulacrum.rarity} simulacrum ${simulacrum.name}; weapon advancements and abilities, simulacrum traits, and other miscellaneous information.`}
    />
    <meta property="og:title" content={globalData.name} />
    <meta
        property="og:description"
        content={`Information about the ${globalData.rarity} simulacrum ${globalData.name}; weapon advancements and abilities, simulacrum traits, and other miscellaneous information.`}
    />
    <meta
        property="og:image"
        content={`/images/Icon/Avatar/${getAvatarImg(globalData)}.webp`}
    />
    <meta
        name="theme-color"
        content={getElementColor(globalData.weapon.element)}
    />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</svelte:head>

<SectionNavigation
    links={[
        "weapon",
        "advancements",
        "skills",
        "advice",
        "awakening",
        "other info",
    ]}
/>

<h1>{simulacrum.name}</h1>
<span style="color: var(--text2)">
    {#if simulacrum.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    {simulacrum.rarity} Simulacrum
</span>

{#if simulacrum.unreleased}
    <UnreleasedWarning />
{/if}

<h2 id="weapon">Weapon</h2>
<WeaponHeader weapon={simulacrum.weapon} />
<WeaponEffects weapon={simulacrum.weapon} rarity={simulacrum.rarity} />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<Advancements weapon={simulacrum.weapon} />

<Ad unit="lb3" />
<Ad unit="mobile_lb1" />

<Abilities weapon={simulacrum.weapon} />

<Ad unit="lb4" />
<Ad unit="mobile_mpu2" />

{#if simulacrum.rarity === "SSR"}
    <UpgradeMaterials weapon={simulacrum.weapon} />

    <Ad unit="lb5" />
    <Ad unit="mobile_lb3" />

{/if}

<Advice {simulacrum} />

<h2 id="awakening">Awakening</h2>
<AwakeningTraits traits={simulacrum.traits} />

<Ad unit="mobile_lb4" />

{#if !simulacrum.unreleased}
<AwakeningGifts
    gifts={simulacrum.bestGifts}
    categories={simulacrum.giftTypes}
/>
{/if}

<h2 id="other-info">Other Info</h2>
{#if !simulacrum.unreleased}
<OtherInfo {simulacrum} />
{:else}
<p><SvelteMarkdown source={`No other info available for **${simulacrum.weapon.name}** :(`} /></p>
{/if}

<Ad unit="mobile_lb5" />
