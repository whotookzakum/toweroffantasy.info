<script>
    import { queryParam, ssp } from "sveltekit-search-params";
    import uniqBy from "lodash/uniqBy.js"
    import RarityIcon from "$components/EntryItem/RarityIcon.svelte";
    import Popper from "$components/Popper.svelte";

    export let originalData;
    const rarity = queryParam("rarity", ssp.string(), {
        showDefaults: false,
        pushHistory: false,
    });

    const uniqueRarities = uniqBy(originalData, (entry) => entry.rarity);

    const rarities = uniqueRarities.map((entry) => ({
        rarity: entry.rarity,
        checked: $rarity?.split(" ")?.includes(`${entry.rarity}`),
    }));

    $: selectedItems = rarities.filter((i) => i.checked);

    $: if (selectedItems.length > 0) {
        $rarity = selectedItems.map((i) => i.rarity).join(" ");
    } else {
        $rarity = null;
    }

    const text = {
        "5": "SSR",
        "4": "SR",
        "3": "R",
        "2": "N",
        "1": "C",
    };
</script>

<div class="box icons-box flex">
    {#each rarities as obj}
        <Popper let:setFocused>
            <input
                type="checkbox"
                bind:checked={obj.checked}
                id="rarity-{obj.rarity}"
                class="visually-hidden style-next-label"
                on:focus={() => setFocused(true)}
                on:blur={() => setFocused(false)}
            />
            <label class="grid" for="rarity-{obj.rarity}">
                <RarityIcon rarity={obj.rarity} />
            </label>
            <p slot="tooltip">{text[obj.rarity]} Rarity</p>
        </Popper>
    {/each}
</div>

<style lang="scss">
    label {
        min-width: 3ch;
        justify-content: center;
    }
</style>