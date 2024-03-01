<script>
    import Gutter from "./Gutter.svelte";
    import StickyBar from "./StickyBar.svelte";
    import Video from "./Video.svelte";
    
    export let unit = "";
    const unitType = unit.replace(/\d+/g, "");
    let innerWidth;
    const components = {
        Gutter: Gutter,
        StickyBar: StickyBar,
        Video: Video
    }
</script>

<!-- Rewrite as a store so each component doesnt have to bind to innerWidth? -->
<svelte:window bind:innerWidth />
<svelte:component this={components[unitType]} {unit} {innerWidth} />
