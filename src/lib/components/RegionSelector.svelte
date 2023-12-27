<script>
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";

    export let style;

    $: pagePath =
        $page.url.searchParams.toString().length > 0
            ? `${$page.url.pathname}?${$page.url.searchParams.toString()}`
            : $page.url.pathname;
    $: cnRoute = $page.url.pathname.includes("/cn");
    $: href = cnRoute ? pagePath.replace("/cn", "") || "/" : "/cn" + pagePath;

    function go(e) {
        e.preventDefault();
        if (browser) {
            goto(href, {
                noScroll: true,
                replaceState: true,
                keepFocus: true,
                invalidateAll: true,
            });
        }
    }
</script>

<a
    {href}
    class:cnRoute
    class="mode-selector-link flex"
    {style}
    on:click={(e) => go(e)}
>
    {cnRoute ? "China" : "Global"}
    <Icon icon="mdi:circle-arrows" rotate={1} width="16px" class="spinner" />
</a>

<style lang="scss">
    a {
        border: none;
        align-items: center;
        font-size: var(--step--3);
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        gap: 0.2rem;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
        color: rgb(228, 228, 228);
        line-height: 1.7;
        border-radius: 3px;
        text-shadow: 0 0 0.5em rgb(0 0 0 / 60%);
        padding: 0 0.4em;
        background: rgb(42, 129, 179);
        transition: transform 0.1s cubic-bezier(0.47, 1.64, 0.41, 0.8);
    }

    a:active {
        transform: scale(0.95);
    }

    .cnRoute {
        background: #e72e37;
    }
</style>
