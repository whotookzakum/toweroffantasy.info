<script>
    import SvelteMarkdown from "svelte-markdown";
    import accessories from "$lib/data/cosmetics/accessories.json";
    import Ad from "$lib/components/Ad.svelte";
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
        content={`/images/UI/shizhuang/Fashion_icon/${accessories[0].imgSrc}.png`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Accessories</h1>

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
                                src={`/images/UI/shizhuang/Fashion_icon/${accessory.imgSrc}.png`}
                                alt={accessory.name}
                                width="128"
                                height="128"
                            />
                            <h2>{accessory.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={accessory.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
