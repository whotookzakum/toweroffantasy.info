<script>
    export let href, chinaOnly;
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
        text-align: center;

        &:hover {
            background: var(--surface3);
        }
    }

    :global(.menu-item-name) {
        line-height: 1.3;
        padding: 0 0.3rem 0.8rem 0.3rem;
    }
</style>
