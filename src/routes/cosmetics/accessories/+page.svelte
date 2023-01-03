<script>
    import SvelteMarkdown from "svelte-markdown";
    import accessories from "$lib/data/cosmetics/accessories.json";
</script>

<h1>Accessories</h1>
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
