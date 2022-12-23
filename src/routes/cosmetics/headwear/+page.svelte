<script>
    import SvelteMarkdown from "svelte-markdown";
    import hats from "$lib/data/cosmetics/headwear.json";
</script>

<h1>Headwear</h1>
<figure>
    <table>
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each hats as hat}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/UI/shizhuang/Fashion_icon/${hat.imgSrc}.png`}
                            alt={hat.name}
                            width="128"
                            height="128"
                        />
                        <h2>{hat.name}</h2>
                    </td>
                    <td>
                        <SvelteMarkdown source={hat.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>