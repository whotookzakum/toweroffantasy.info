<script>
    export let href;
    export let chinaOnly = false;
</script>

<li class="menu-item">
    <a {href}>
        {#if chinaOnly}
            <abbr class="absolute" title="China Exclusive" />
        {/if}
        <slot />
    </a>
</li>

<style lang="scss">
    .menu-item a {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        border: none;
        background: var(--surface2);
        box-shadow: 0 2px 4px var(--surface-shadow);
        position: relative;
        transition: all 0.1s ease;
        overflow: hidden;

        &:hover {
            background: var(--surface3);
        }
    }
</style>
