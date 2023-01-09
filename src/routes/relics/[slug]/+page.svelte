<script>
    import Advancements from "$lib/components/simulacrum/Advancements.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Youtube from "$lib/components/Youtube.svelte";
    import Ad from "$lib/components/Ad.svelte";

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
        content={`/images/UI/Artifact/icon/${data.imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation />

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    {data.rarity} Relic
</span>

<SvelteMarkdown source={data.description} />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<Advancements weapon={data} />

<Ad unit="lb3" />
<Ad unit="mobile_mpu2" />

<h4 id="preview">Preview</h4>
<Youtube
    source={data.videoSrc}
    caption={`The ${data.name} used in this video is ${data.starsInVideo}★`}
/>