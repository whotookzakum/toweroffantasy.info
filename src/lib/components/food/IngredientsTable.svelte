<script>
    import SvelteMarkdown from "svelte-markdown";
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("mount");
    });

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
                <tr id={ingredient.name.toLowerCase().replace(/\s+/g, "-")}>
                    <td class="img-and-name">
                        <img
                            src={`/images/Icon/shicai/${ingredient.imgSrc}.png`}
                            alt={ingredient.name}
                            width="64"
                            height="64"
                            loading="lazy"
                        />
                        <span>{ingredient.name}</span>
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

    span {
        display: inline-block;
        font-size: var(--step-0);
        font-weight: 600;
        grid-column: span 2;
    }
</style>
