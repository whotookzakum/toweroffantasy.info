<script>
    import uniq from "lodash/uniq"

    export let originalData
    export let version;
    const versions = uniq(originalData.map(entry => entry.version), false).sort((a, b) => b - a)
</script>

<select bind:value={version}>
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