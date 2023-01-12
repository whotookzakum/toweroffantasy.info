<script>
    export let filtered = false;
</script>

<div class="filter-group" data-filtered={filtered}>
    <slot />
</div>

<style lang="scss">
    .filter-group {
        display: flex;
    }

    [data-filtered="true"] :global(input:not(:checked) + * > .icon-container) {
        opacity: 0.3;
    }
</style>
