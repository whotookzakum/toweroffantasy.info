<script>
    import SvelteMarkdown from "svelte-markdown";
    import hats from "$lib/data/cosmetics/headwear.json";
    import Ad from "$lib/components/Ad/Ad.svelte";
    import Youtube from "$lib/components/Youtube.svelte";

    let previewVidSrc = "https://www.youtube.com/embed/rqr0VPT_p04";
    
    function updateUrl(src) {
        previewVidSrc = src;
    }
</script>

<svelte:head>
    <title>Headwear | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic headwear and how to get them.">
    <meta property="og:title" content="Headwear" />
    <meta
        property="og:description"
        content="List of cosmetic headwear and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/UI/shizhuang/Fashion_icon/${hats[0].imgSrc}.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Headwear</h1>

<Youtube id="preview" source={previewVidSrc} caption="Preview of headwear from version 2.4." />

<Ad unit="Banner1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
            <th>Video</th>
        </thead>
        <tbody>
            {#each hats as hat}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/${hat.imgSrc}.webp`}
                                alt={hat.name}
                                width="128"
                                height="128"
                                loading="lazy"
                            />
                            <h2>{hat.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={hat.source} />
                    </td>
                    <td>
                        {#if hat.videoSrc}
                            <a href="#preview" on:click={() => updateUrl(hat.videoSrc)}>View</a>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
