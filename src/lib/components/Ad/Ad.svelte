<script>
    import Gutter from "./Gutter.svelte";
    
    export let unit = "";
    const unitType = unit.replace(/\d+/g, "");
    let innerWidth;
    const components = {
        Gutter: Gutter
    }
</script>

<!-- Rewrite as a store so each component doesnt have to bind to innerWidth? -->
<svelte:window bind:innerWidth />
<!-- <svelte:component this={components[unitType]} {unit} {innerWidth} /> -->
