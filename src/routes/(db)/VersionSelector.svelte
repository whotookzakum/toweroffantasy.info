<script>
    import { queryParam, ssp } from "sveltekit-search-params";
    import { uniq } from "lodash"

    export let originalData
    const versions = uniq(originalData.map(entry => entry.version), false).sort((a, b) => b - a)
    const version = queryParam("version", ssp.string("all"), { showDefaults: false, pushHistory: false })
</script>

<select bind:value={$version}>
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