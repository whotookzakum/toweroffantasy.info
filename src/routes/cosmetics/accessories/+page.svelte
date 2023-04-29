<script>
    import SvelteMarkdown from "svelte-markdown";
    import accessories from "$lib/data/cosmetics/accessories.json";
    import Ad from "$lib/components/Ad.svelte";
    import Youtube from "$lib/components/Youtube.svelte";

    let previewVidSrc = "https://www.youtube.com/embed/rqr0VPT_p04";
    
    function updateUrl(src) {
        previewVidSrc = src;
    }
</script>

<svelte:head>
    <title>Accessories | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic accessories and how to get them.">
    <meta property="og:title" content="Accessories" />
    <meta
        property="og:description"
        content="List of cosmetic accessories and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/UI/shizhuang/Fashion_icon/${accessories[0].imgSrc}.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Accessories</h1>

<Youtube id="preview" source={previewVidSrc} caption="Preview of accessories from version 2.4." />

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each accessories as accessory}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/${accessory.imgSrc}.webp`}
                                alt={accessory.name}
                                width="128"
                                height="128"
                                loading="lazy"
                            />
                            <h2>{accessory.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={accessory.source} />
                    </td>
                    <td>
                        {#if accessory.videoSrc}
                            <a href="#preview" on:click={() => updateUrl(accessory.videoSrc)}>View</a>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
