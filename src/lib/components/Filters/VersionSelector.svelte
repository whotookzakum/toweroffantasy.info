<script>
    import { queryParam, ssp } from "sveltekit-search-params";
    import { uniq } from "lodash"

    export let originalData
    const versions = uniq(originalData.map(entry => entry.version), false).sort((a, b) => b - a)
    const version = queryParam("version", ssp.string(), { showDefaults: false, pushHistory: false })

    let inputValue = $version ? $version : "all"

    $: if (inputValue === "all") {
        $version = null;
    } else {
        $version = inputValue;
    }
</script>

<select bind:value={inputValue}>
    <option class="default" disabled selected value="all">Version</option>
    <option value="all">All</option>
    {#each versions as version}
        <option value={version}>{version}</option>
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