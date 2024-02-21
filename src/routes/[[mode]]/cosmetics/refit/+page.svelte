<script>
    import SvelteMarkdown from "svelte-markdown";
    import items from "$lib/data/cosmetics/refit.json";
    import Ad from "$lib/components/Ad/Ad.svelte";
    import Youtube from "$lib/components/Youtube.svelte";

    let previewVidSrc = "https://www.youtube.com/embed/rqr0VPT_p04?start=350";
    
    function updateUrl(src) {
        previewVidSrc = src;
    }
</script>

<svelte:head>
    <title>Refit | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic equipment refits and how to get them.">
    <meta property="og:title" content="Refit" />
    <meta
        property="og:description"
        content="List of cosmetic equipment refits and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/UI/shizhuang/Fashion_icon/${items[0].imgSrc}.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Refit</h1>

<Youtube id="preview" source={previewVidSrc} caption="Preview of refits from version 2.4." />

<Ad unit="Banner1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
            <th>Video</th>
        </thead>
        <tbody>
            {#each items as item}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/${item.imgSrc}.webp`}
                                alt={item.name}
                                width="128"
                                height="128"
                                loading="lazy"
                            />
                            <h2>{item.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={item.source} />
                    </td>
                    <td>
                        {#if item.videoSrc}
                            <a href="#preview" on:click={() => updateUrl(item.videoSrc)}>View</a>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>