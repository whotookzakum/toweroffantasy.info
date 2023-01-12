<script>
    import SvelteMarkdown from "svelte-markdown";

    export let ingredients;
</script>

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each ingredients as ingredient}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/Icon/shicai/${ingredient.imgSrc}.png`}
                            alt={ingredient.name}
                            width="64"
                            height="64"
                            loading="lazy"
                        />
                        <h3>{ingredient.name}</h3>
                    </td>
                    <td>
                        <SvelteMarkdown source={ingredient.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    thead th:first-of-type {
        text-align: center;
    }

    .img-and-name {
        row-gap: 0.5rem;
    }
</style>
