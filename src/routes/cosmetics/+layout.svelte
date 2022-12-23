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

<style global lang="scss">
    html {
        scroll-padding: 200px;
    }
    
    .img-and-name {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;

        h2 {
            grid-column: span 2;
            margin: 0;
            font-size: var(--step-0);
            text-transform: unset;
            text-align: center;
        }
    }
</style>