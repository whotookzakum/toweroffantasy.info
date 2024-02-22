<script>
    import { queryParam, ssp } from "sveltekit-search-params";
    import { uniq } from "lodash"

    export let originalData;
    export let key = "type"

    const types = uniq(originalData.map(entry => entry[key]), false).sort((a, b) => b - a)
    const type = queryParam("type", ssp.string(), { showDefaults: false, pushHistory: false })

    let inputValue = $type ? $type : "all"

    $: if (inputValue === "all") {
        $type = null;
    } else {
        $type = inputValue;
    }
</script>

<select bind:value={inputValue}>
    <option class="default" disabled selected value="all">Type</option>
    <option value="all">All</option>
    {#each types as type}
        <option value={type}>{type}</option>
    {/each}
</select>

<style lang="scss">
    select {
        cursor: pointer;
        color: var(--accent);
    }

    option[disabled] {
        display: none;
    }

    select:has(option[disabled]:checked) {
        color: var(--text2);
    }
</style>