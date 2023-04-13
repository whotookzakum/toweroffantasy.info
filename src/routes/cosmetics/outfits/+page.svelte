<script>
    import SvelteMarkdown from "svelte-markdown";
    import outfits from "$lib/data/cosmetics/outfits.json";
    import Ad from "$lib/components/Ad.svelte";
    import Youtube from "$lib/components/Youtube.svelte";
    import Icon from "@iconify/svelte";
    //     "name": "Absolute Order",
    //     "imgSrcs": ["fashion_f18", "fashion_m"],
    // {
    //     "name": "New Year Outfit",
    //     "imgSrcs": ["fashion_f", "fashion_m"],
    //     "source": "Obtained from gachapon during the event (Lunar New Year).",
    //     "videoSrc": "https://www.youtube.com/embed/iig3osE_r6s?start=10"
    // },
    let previewVidSrc = "https://www.youtube.com/embed/rKzgowQ_xUc";

    function updateUrl(src) {
        previewVidSrc = src;
    }
</script>

<svelte:head>
    <title>Outfits | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="List of cosmetic outfits and how to get them."
    />
    <meta property="og:title" content="Outfits" />
    <meta
        property="og:description"
        content="List of cosmetic outfits and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/UI/shizhuang/Fashion_icon/item_fashion_icon/${outfits[0].imgSrcs[0]}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Outfits</h1>
<Youtube
    id="preview"
    source={previewVidSrc}
    caption="Preview of most outfits from version 2.4."
/>

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
                                src={`/images/UI/shizhuang/Fashion_icon/item_fashion_icon/${outfit.imgSrcs[0]}.png`}
                                alt={`${outfit.name} female`}
                                width="128"
                                height="128"
                                loading="lazy"
                            />
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/item_fashion_icon/${outfit.imgSrcs[1]}.png`}
                                alt={`${outfit.name} male`}
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
                    <td style="white-space: nowrap">
                        {#if outfit.videoSrc?.includes("rKzgowQ_xUc")}
                            <a
                                href="#preview"
                                on:click={() => updateUrl(outfit.videoSrc)}
                                >View</a
                            >
                        {:else}
                            <a
                                href={outfit.videoSrc}
                                target="_blank"
                                rel="noreferrer noopener nofollow">View</a
                            >
                            <Icon
                                icon="mdi:external-link"
                                width="16"
                                height="16"
                            />
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .img-and-name {
        grid-template-columns: 1fr 1fr;
    }
</style>
