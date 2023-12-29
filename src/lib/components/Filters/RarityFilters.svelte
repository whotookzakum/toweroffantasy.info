<script>
    import { queryParam, ssp } from "sveltekit-search-params";
    import { uniqBy } from "lodash";
    import RarityIcon from "$components/EntryItem/RarityIcon.svelte";

    export let originalData;
    const rarity = queryParam("rarity", ssp.string(""), {
        showDefaults: false,
        pushHistory: false,
    });

    const uniqueRarities = uniqBy(originalData, (entry) => entry.rarity)

    const rarities = uniqueRarities.map((entry) => ({ rarity: entry.rarity, checked: $rarity.split(" ").includes(`${entry.rarity}`) }))

    $: $rarity = rarities
        .filter((i) => i.checked)
        .map((i) => i.rarity)
        .join(" ");
</script>

<div class="box flex">
    {#each rarities as obj}
        <input
            type="checkbox"
            bind:checked={obj.checked}
            id="rarity-{obj.rarity}"
            class="visually-hidden"
        />
        <label class="grid" for="rarity-{obj.rarity}">
            <RarityIcon rarity={obj.rarity} />
        </label>
    {/each}
</div>

<style lang="scss">
    .box {
        padding: 0.125rem;
        align-items: center;
    }

    label {
        padding: 0.2rem;
        place-content: center;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;
    }

    input:checked + label {
        background: var(--surface2);
        border-color: var(--accent);
    }
</style>
