<script>
    import Gutter from "./Gutter.svelte";
    
    export let unit = "";
    const unitType = unit.replace(/\d+/g, "");
    let innerWidth;
    const components = {
        Gutter: Gutter
    }
</script>

<svelte:window bind:innerWidth />
<!-- <svelte:component this={components[unitType]} {unit} {innerWidth} /> -->
