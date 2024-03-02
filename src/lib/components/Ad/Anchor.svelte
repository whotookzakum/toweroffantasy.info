<script>
    import { onMount } from "svelte";
    import { dev, browser } from "$app/environment";

    export let unit = "";
    export let innerWidth;
    let previousWidth = browser && window.innerWidth;

    const options = {
        refreshLimit: 20,
        refreshTime: 30,
        format: "anchor",
        anchor: "bottom",
        anchorBgColor: "transparent",
        report: {
            enabled: true,
            icon: true,
            wording: "Report Ad",
            position: "top-right",
        },
        mediaQuery: "(min-width: 0px)",
        anchorPersistClose: false,
        demo: dev,
    };

    onMount(() => {
        generateAd();
    });

    // Check large/small breakpoints
    $: if (innerWidth >= 970 && previousWidth !== 970) {
        previousWidth = 970;
        generateAd();
    } else if (innerWidth < 970 && innerWidth >= 728 && previousWidth !== 728) {
        previousWidth = 728;
        generateAd();
    }
    else if (innerWidth < 728 && innerWidth >= 320 && previousWidth !== 320) {
        previousWidth = 320;
        generateAd();
    }

    function generateAd() {
        window["nitroAds"].createAd(`np${unit}`, options);
    }
</script>

<div id="np{unit}" />
