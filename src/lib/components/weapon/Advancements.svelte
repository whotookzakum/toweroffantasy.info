<script>
    import SvelteMarkdown from 'svelte-markdown'
    export let weapon
</script>

<h4 id="advancements">Advancements</h4>
<figure>
    <table>
        <thead>
            <th>Stars</th>
            <th>Effect</th>
        </thead>
        <tbody>
            {#each weapon.advancements as star, index}
                <tr>
                    <th>{index + 1} ★</th>
                    <td><SvelteMarkdown source={star} /></td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>