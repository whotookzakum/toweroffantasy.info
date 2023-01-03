<script>
    import SvelteMarkdown from "svelte-markdown";
    import chatBubbles from "$lib/data/cosmetics/chatBubbles.json";
</script>

<h1>Chat Bubbles</h1>
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
