<script>
    import { dev, browser } from "$app/environment";
    import { onMount } from "svelte";

    // Auto-refresh if window size passes through breakpoints. Ad script automatically places a properly sized ad, however sizes can also be manually specified.
    export let unit = "";
    export let innerWidth;
    let previousWidth = browser && window.innerWidth;

    const options = {
        refreshTime: 30,
        format: "sticky-stack",
        stickyStackLimit: 15,
        stickyStackSpace: 2.5,
        stickyStackOffset: 25,
        sizes: [],
        report: {
            enabled: true,
            icon: true,
            wording: "Report Ad",
            position: "top-right",
        },
        demo: dev,
    };

    onMount(() => {
        generateAd();
    });

    // Check large/small breakpoints
    $: if (innerWidth > 1600 && previousWidth !== 1600) {
        previousWidth = 1600;
        generateAd();
    } else if (
        innerWidth < 1600 &&
        innerWidth > 1280 &&
        previousWidth !== 1280
    ) {
        previousWidth = 1280;
        generateAd();
    }

    function generateAd(sizes = []) {
        window["nitroAds"].createAd(`np${unit}`, { ...options, sizes });
    }
</script>

{#if innerWidth > 1280}
    <div id="np{unit}" />
{/if}

<style lang="scss">
    div {
        min-height: 250px;
        background: red;
        position: sticky;
        top: 93px; // height of navbar
    }
</style>
