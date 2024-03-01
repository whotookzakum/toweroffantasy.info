<script>
    export let selectorName;
    export let dataset;
    export let value;
</script>

<select bind:value>
    <option class="default" disabled selected value="all">{selectorName}</option
    >
    <option value="all">All</option>
    {#each dataset as item}
        <option value={item.value}>{item.name}</option>
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
