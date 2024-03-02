<script>
    import Gutter from "./Gutter.svelte";
    import Anchor from "./Anchor.svelte";
    import Floating from "./Floating.svelte";
    import { page } from "$app/stores"
    import ArticleLB from "./ArticleLB.svelte";
    import Lb from "./LB.svelte";
    
    export let unit = "";
    const unitType = unit.split("-")[0];
    let innerWidth;
    const components = {
        Gutter: Gutter,
        Anchor: Anchor,
        Floating: Floating,
        ArticleLB: ArticleLB,
        LB: Lb
    }
</script>

<!-- Rewrite as a store so each component doesnt have to bind to innerWidth? -->
<svelte:window bind:innerWidth />
{#key $page.url.pathname}
    <svelte:component this={components[unitType]} {unit} {innerWidth} />
{/key}
