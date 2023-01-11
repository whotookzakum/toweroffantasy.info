<script>
    import SvelteMarkdown from "svelte-markdown";
    import items from "$lib/data/cosmetics/refit.json";
    import Ad from "$lib/components/Ad.svelte";
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
        content={`/images/UI/shizhuang/Fashion_icon/${items[0].imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Refit</h1>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each items as item}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/${item.imgSrc}.png`}
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
                </tr>
            {/each}
        </tbody>
    </table>
</div>