<script>
    import Youtube from "$lib/components/Youtube.svelte";
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import relicVideoLinks from "./relicVideoLinks.json";
    import SvelteMarkdown from "svelte-markdown"
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    const { relic } = data;
</script>

<Meta
    title="{relic.name} | Tower of Fantasy Index"
    description="All about the relic {relic.name}, such as advancements and a video preview (if available)."
    image={relic.icon}
/>

<Ad unit="LB-relic1" />

<GenericHeader
    h1={relic.name}
    icon={relic.icon}
    rarity={relic.rarity}
    desc={relic.source}
/>

<h2 id="advancements">Advancements</h2>
<table class="borders bg-alternate" style="margin-top: 1rem">
    <thead>
        <tr>
            <th>Stars</th>
            <th>Effect</th>
        </tr>
    </thead>
    <tbody>
        {#each relic.advancements as advancement, index}
            <tr>
                <td
                    style="color: var(--tier-s); font-weight: bold; font-size: var(--step-1);"
                    >{index + 1} ★</td
                >
                <td>
                    <SvelteMarkdown source={advancement} />
                </td>
            </tr>
        {/each}
    </tbody>
</table>

{#if relicVideoLinks[relic.id]}
    <h2 id="preview">Preview</h2>
    <Youtube
        source={relicVideoLinks[relic.id].videoId}
        caption="The {relic.name} shown in this video is {relicVideoLinks[
            relic.id
        ].starsInVideo}★"
    />
{/if}
