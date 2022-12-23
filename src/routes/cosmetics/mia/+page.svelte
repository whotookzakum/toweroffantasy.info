<script>
    import SvelteMarkdown from "svelte-markdown";
    import outfits from "$lib/data/cosmetics/mia.json";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import AnchorJS from "anchor-js";
    import { onMount } from 'svelte';

    onMount(() => {
        const anchors = new AnchorJS();
        anchors.add('h2');
    })
</script>

<SectionNavigation />
<h1>Mi-a Outfits</h1>
<figure>
    <table>
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each outfits as outfit}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/Icon/item/${outfit.imgSrc}.png`}
                            alt={outfit.name}
                            width="256"
                            height="256"
                        />
                        <h2>{outfit.name}</h2>
                    </td>
                    <td>
                        <SvelteMarkdown source={outfit.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>

<style lang="scss">
    .img-and-name {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;

        img {
            width: 128px;
            height: auto;
        }

        h2 {
            grid-column: span 2;
            margin: 0;
            font-size: var(--step-0);
            text-transform: unset;
            text-align: center;
        }
    }

    :global(html) {
        scroll-padding: 200px;
    }
</style>
