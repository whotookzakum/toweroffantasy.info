<script>
    import Advancements from "$lib/components/simulacrum/Advancements.svelte";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Youtube from "$lib/components/Youtube.svelte";

    export let data;
</script>

<SectionNavigation />

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    {data.rarity} Relic
</span>

<SvelteMarkdown source={data.description} />

<Advancements weapon={data} />

<h4 id="preview">Preview</h4>
<Youtube
    source={data.videoSrc}
    caption={`The ${data.name} used in this video is ${data.starsInVideo}★`}
/>