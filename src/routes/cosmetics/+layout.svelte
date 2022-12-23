<script>
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    import { onMount } from 'svelte';
    import AnchorJS from "anchor-js";
    onMount(() => {
        const anchors = new AnchorJS();
        anchors.add('h2');
    })
</script>

<SectionNavigation />
<slot/>