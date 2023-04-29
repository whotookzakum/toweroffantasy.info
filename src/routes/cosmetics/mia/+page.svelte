<script>
    import SvelteMarkdown from "svelte-markdown";
    import outfits from "$lib/data/cosmetics/mia.json";
    import Ad from "$lib/components/Ad.svelte";
    import Youtube from "$lib/components/Youtube.svelte";

    let previewVidSrc = "https://www.youtube.com/embed/R4fCNLUbeQk";
    
    function updateUrl(src) {
        previewVidSrc = src;
    }
</script>

<svelte:head>
    <title>Mi-a Outfits | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic Mi-a outfits and how to get them.">
    <meta property="og:title" content="Mi-a Outfits" />
    <meta
        property="og:description"
        content="List of cosmetic Mi-a outfits and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/Icon/item/${outfits[0].imgSrc}.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Mi-a Outfits</h1>

<Youtube id="preview" source={previewVidSrc} caption="Preview of most Mi-a outfits from version 2.4." />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
            <th>Video</th>
        </thead>
        <tbody>
            {#each outfits as outfit}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/Icon/item/${outfit.imgSrc}.webp`}
                                alt={outfit.name}
                                width="128"
                                height="128"
                                loading="lazy"
                            />
                            <h2>{outfit.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={outfit.source} />
                    </td>
                    <td>
                        {#if outfit.videoSrc}
                            <a href="#preview" on:click={() => updateUrl(outfit.videoSrc)}>View</a>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>