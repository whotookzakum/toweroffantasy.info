<script>
    import SvelteMarkdown from "svelte-markdown";
    import frames from "$lib/data/cosmetics/avatarFrames.json";
    import Ad from "$lib/components/Ad.svelte";
</script>

<svelte:head>
    <title>Avatar Frames | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic avatar frames and how to get them.">
    <meta property="og:title" content="Avatar Frames" />
    <meta
        property="og:description"
        content="List of cosmetic avatar frames and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/Icon/AvatarFrame/${frames[0].imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Avatar Frames</h1>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each frames as frame}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/Icon/AvatarFrame/${frame.imgSrc}.png`}
                                alt={frame.name}
                                width="128"
                                height="128"
                            />
                            <h2>{frame.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={frame.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
