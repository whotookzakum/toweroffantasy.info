<script>
    import SvelteMarkdown from "svelte-markdown";
    import frames from "$lib/data/cosmetics/avatarFrames.json";
</script>

<h1>Avatar Frames</h1>
<figure>
    <table>
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each frames as frame}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/Icon/AvatarFrame/${frame.imgSrc}.png`}
                            alt={frame.name}
                            width="128"
                            height="128"
                        />
                        <h2>{frame.name}</h2>
                    </td>
                    <td>
                        <SvelteMarkdown source={frame.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>
