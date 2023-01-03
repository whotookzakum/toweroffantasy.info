<script>
    import SvelteMarkdown from "svelte-markdown";
    import avatars from "$lib/data/cosmetics/avatars.json";
</script>

<h1>Avatars</h1>
<p>
    Avatars shown on the <a href="/simulacra">Simulacra</a> page can be obtained
    by raising the respective simulacrum's Awakening points (friendship) to 200.
</p>
<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each avatars as avatar}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/Icon/Avatar/${avatar.imgSrc}.png`}
                                alt={avatar.name}
                                width="128"
                                height="128"
                            />
                            <h2>{avatar.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={avatar.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
