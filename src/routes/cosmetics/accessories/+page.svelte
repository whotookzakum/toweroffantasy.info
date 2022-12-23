<script>
    import SvelteMarkdown from "svelte-markdown";
    import accessories from "$lib/data/cosmetics/accessories.json";
</script>

<h1>Accessories</h1>
<figure>
    <table>
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each accessories as accessory}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/UI/shizhuang/Fashion_icon/${accessory.imgSrc}.png`}
                            alt={accessory.name}
                            width="128"
                            height="128"
                        />
                        <h2>{accessory.name}</h2>
                    </td>
                    <td>
                        <SvelteMarkdown source={accessory.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>