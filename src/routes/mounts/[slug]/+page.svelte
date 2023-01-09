<script>
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
        content={`Information about the ${data.name} mount and how to unlock it.`}
    />
    <meta property="og:title" content={data.name} />
    <meta
        property="og:description"
        content={`Information about the ${data.name} mount and how to unlock it.`}
    />
    <meta
        property="og:image"
        content={`/images/UI/Mount/${data.imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation />

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if} Mount
</span>

<h4>Parts</h4>
<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Part</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each data.parts as part}
                <tr>
                    <td>
                        <img
                            src={`/images/Icon/Mount/${part.imgSrc}.png`}
                            alt={part.imgSrc}
                            width="128"
                            height="128"
                            loading="lazy"
                        />
                    </td>
                    <td>
                        <SvelteMarkdown source={part.source} />
                        {#if part.dropRate}
                            <a
                                href="https://twitter.com/Sova_ToF/status/1562031690490560517"
                                rel="noreferrer noopener nofollow"
                                target="_blank">Drop rate:</a
                            >
                            <strong>{part.dropRate}%</strong> (0.50% at 100+ kills)
                        {/if}
                        {#if part.guide}
                            <a
                                href={part.guide}
                                rel="noreferrer noopener nofollow"
                                target="_blank">View guide</a
                            >
                        {/if}
                        {#if part.video}
                            <Youtube source={part.video} />
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

{#if data.videoSrc}
    <h4 id="preview">Preview</h4>
    <Youtube source={data.videoSrc} />
{/if}

<style>
    td:first-of-type {
        text-align: center;
    }
</style>
