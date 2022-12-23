<script>
    import SvelteMarkdown from "svelte-markdown";
    import frames from "$lib/data/cosmetics/avatarFrames.json";
</script>

<h1>Avatar Frames</h1>
<figure>
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
</figure>
