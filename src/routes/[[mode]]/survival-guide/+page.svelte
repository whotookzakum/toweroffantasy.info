<script>
    import Meta from "$components/Meta.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import RadioSliderGroup from "$lib/components/RadioSliderGroup.svelte";
    import { guidebookCategory } from "$lib/stores";
    import SearchBar from "$lib/components/Filters/SearchBar.svelte";
    import { applyFilters } from "$lib/utils"

    export let data;
    let q = ""
    let queryKey = "title"

    $: entries = applyFilters(data[$guidebookCategory], { q, queryKey })
</script>

<Meta
    title="Survival Guide | Tower of Fantasy Index"
    description="The Survival Guide is the in-game guide featuring useful hints and mini-guides for various aspects of the game, such as exploration puzzles and monster logs."
/>

<h1>Survival Guide</h1>
<p>
    The Survival Guide is the in-game guide featuring useful hints and
    mini-guides for various aspects of the game, such as exploration puzzles and
    monster logs.
</p>

<div class="grid g-100">
    <div class="filters-row">
        <SearchBar bind:q />
        <RadioSliderGroup
            bind:group={$guidebookCategory}
            groupName="guidebook-category"
            name="guidebookCategory"
            data={[
                { label: "Exploration", value: "exploration" },
                { label: "Monsters", value: "monsters" },
            ]}
        />
    </div>

    <div class="table-wrapper">
        <table class="bg-alternate">
            <thead>
                <tr>
                    <th>Puzzle</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {#each entries as item}
                    <tr>
                        <td>
                            <div class="img-wrapper grid g-100">
                                <img src={item.icon} alt="" />
                                <h2>{item.title}</h2>
                            </div>
                        </td>
                        <td>
                            <SvelteMarkdown source={item.description} />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style lang="scss">
    .img-wrapper {
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
        width: fit-content;

        &::before {
            content: "";
            background: linear-gradient(transparent 50%, black);
            position: absolute;
            z-index: 1;
            inset: 0 -1rem -1rem -1rem;
        }
    }

    h2 {
        font-size: var(--step-1);
        font-weight: 500;
        margin: 0;
        line-height: normal;
        position: absolute;
        bottom: 0.5rem;
        left: 0;
        padding-inline: 0.55rem;
        color: white;
        text-shadow: 0 2px 3px black;
        font-weight: 600;
        z-index: 2;
    }

    td {
        min-inline-size: 40ch;
    }

    img {
        max-width: 400px;
        height: auto;
        position: relative;
    }
</style>
