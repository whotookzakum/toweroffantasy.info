<script>
    import SvelteMarkdown from "svelte-markdown";
    import outfits from "$lib/data/cosmetics/outfits.json";
    // {
    //     "name": "Absolute Order",
    //     "imgSrcs": ["fashion_f18", "fashion_m"],
    //     "source": ""
    // }
</script>

<h1>Outfits</h1>
<figure>
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
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
                            />
                            <img
                                src={`/images/UI/shizhuang/Fashion_icon/item_fashion_icon/${outfit.imgSrcs[1]}.png`}
                                alt={`${outfit.name} male`}
                                width="128"
                                height="128"
                            />
                            <h2>{outfit.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={outfit.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>

<style>
    .img-and-name {
        grid-template-columns: 1fr 1fr;
    }
</style>
