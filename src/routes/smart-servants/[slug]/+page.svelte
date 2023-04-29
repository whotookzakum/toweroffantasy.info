<script>
    import Advancements from "$lib/components/simulacrum/Advancements.svelte";
    import Abilities from "../../../lib/components/smart-servants/Abilities.svelte";
    import Header from "../../../lib/components/smart-servants/Header.svelte";
    import Effects from "../../../lib/components/smart-servants/Effects.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Youtube from "$lib/components/Youtube.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import UpgradeMaterials from "../../../lib/components/smart-servants/UpgradeMaterials.svelte";

    export let data;
</script>

<svelte:head>
    <title>{data.name} | Tower of Fantasy Index</title>
    <meta
        name="description"
        content={`Information about the ${data.rarity} relic ${data.name}.`}
    />
    <meta property="og:title" content={data.name} />
    <meta
        property="og:description"
        content={`Information about the ${data.rarity} relic ${data.name}.`}
    />
    <meta
        property="og:image"
        content={`/images/UI/Artifact/icon/${data.imgSrc}.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation
    links={["info", "advancements", "abilities", "upgrade materials"]}
/>

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    Smart Servant
</span>

<Header data={data} />
<Effects weapon={data}/>


<SvelteMarkdown source={data.description} />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<Advancements weapon={data} />

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<Abilities data={data} />

<Ad unit="lb5" />
<Ad unit="mobile_lb3" />

<UpgradeMaterials gifts={data.bestGifts} />

{#if data.videoSrc}
    <h4 id="preview">Preview</h4>
    <Youtube
        source={data.videoSrc}
        caption={`The ${data.name} used in this video is ${data.starsInVideo}★`}
    />
{/if}
