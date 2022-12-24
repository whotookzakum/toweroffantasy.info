<script>
    export let href;
</script>

<li class="menu-item">
    <a {href}>
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

        &:hover {
            background: var(--surface3);
        }
    }
</style>