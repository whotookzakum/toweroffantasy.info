<script>
    import Gutter from "./Gutter.svelte";
    import StickyBar from "./StickyBar.svelte";
    import Floating from "./Floating.svelte";
    import { page } from "$app/stores"
    
    export let unit = "";
    const unitType = unit.replace(/\d+/g, "");
    let innerWidth;
    const components = {
        Gutter: Gutter,
        StickyBar: StickyBar,
        Floating: Floating
    }
</script>

<!-- Rewrite as a store so each component doesnt have to bind to innerWidth? -->
<svelte:window bind:innerWidth />
{#key $page.url.pathname}
    <svelte:component this={components[unitType]} {unit} {innerWidth} />
{/key}
