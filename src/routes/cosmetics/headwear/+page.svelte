<script>
    import SvelteMarkdown from "svelte-markdown";
    import hats from "$lib/data/cosmetics/headwear.json";
    import Ad from "$lib/components/Ad.svelte";
</script>

<h1>Headwear</h1>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each hats as hat}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/${hat.imgSrc}.png`}
                                alt={hat.name}
                                width="128"
                                height="128"
                            />
                            <h2>{hat.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={hat.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
