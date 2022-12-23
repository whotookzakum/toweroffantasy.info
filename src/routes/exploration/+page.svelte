<script>
    import SvelteMarkdown from "svelte-markdown"
    import puzzles from "$lib/data/exploration/exploration.json"
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import { onMount } from 'svelte';
    import AnchorJS from "anchor-js";
    onMount(() => {
        const anchors = new AnchorJS();
        anchors.add('h2');
    })
</script>

<SectionNavigation />
<h1>Exploration</h1>
<figure>
    <table>
        <thead>
            <th>Puzzle</th>
            <th>Solution</th>
        </thead>
        <tbody>
            {#each puzzles as puzzle}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/exploration/${puzzle.imgSrc}.webp`}
                            alt={puzzle.name}
                            width="150"
                            height="120"
                        />
                        <h2>{puzzle.name}</h2>
                    </td>
                    <td>
                        <SvelteMarkdown source={puzzle.solution} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>