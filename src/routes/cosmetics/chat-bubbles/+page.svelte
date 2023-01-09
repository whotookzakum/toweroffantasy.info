<script>
    import SvelteMarkdown from "svelte-markdown";
    import chatBubbles from "$lib/data/cosmetics/chatBubbles.json";
    import Ad from "$lib/components/Ad.svelte";
</script>

<svelte:head>
    <title>Chat Bubbles | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic chat bubbles and how to get them.">
    <meta property="og:title" content="Chat Bubbles" />
    <meta
        property="og:description"
        content="List of cosmetic chat bubbles and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/Icon/chat/qipao/${chatBubbles[0].imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Chat Bubbles</h1>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each chatBubbles as bubble}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/Icon/chat/qipao/${bubble.imgSrc}.png`}
                                alt={bubble.name}
                                width="198"
                                height="112"
                            />
                            <h2>{bubble.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={bubble.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    img {
        width: auto;
        height: auto;
    }
</style>
