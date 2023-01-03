<script>
    import SvelteMarkdown from 'svelte-markdown'
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    export let data;
</script>

<SectionNavigation />

<h1>{data.name}</h1>
<span style="color: var(--text2)">
    {#if data.chinaOnly}
        <abbr title="China Exclusive" />
    {/if}
    {data.rarity} Matrices
</span>

<h4 id="sets">Sets</h4>
<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Pieces</th>
            <th>Effect</th>
        </thead>
        <tbody>
            {#each data.sets as set, index}
                <tr>
                    <th style="color: var(--tier-s)">{set.pieces}</th>
                    <td><SvelteMarkdown source={set.description} /></td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
