<script>
    import { page } from "$app/stores";

    export let href, style, classes;
    $: newHref = $page.url.pathname.includes("/cn") ? "/cn" + href : href;
</script>

<a
    href={newHref}
    {style}
    class={classes}
    class:active={$page.url.pathname.includes(href)}
>
    <slot />
</a>

<style lang="scss">
    .nav-link {
        border: none;
        padding: 0.5rem;
        gap: 0.25rem;
        font-weight: 500;
        font-size: var(--step--2);

        &:not(.nav-home).active {
            color: var(--accent);
        }
    }

    .nav-home {
        font-size: var(--step-1);
        font-weight: 600;
        border: none;
    }
</style>
