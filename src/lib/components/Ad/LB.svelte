<script>
    import { onMount } from "svelte";
    import { dev, browser } from "$app/environment";

    export let unit = "";
    export let innerWidth;
    let previousWidth = browser && window.innerWidth;

    const options = {
        refreshTime: 30,
        renderVisibleOnly: false,
        sizes: [],
        report: {
            enabled: true,
            icon: true,
            wording: "Report Ad",
            position: "bottom-right",
        },
        mediaQuery: "(min-width: 0px)",
        demo: dev,
    };

    onMount(() => {
        generateAd([[970, 90], [728, 90], [320, 100], [320, 50]]);
    });

    $: if (innerWidth >= 1339 && previousWidth !== 1339) {
        previousWidth = 1339;
        generateAd([[970, 90], [728, 90]]);
    } else if (
        innerWidth < 998 &&
        innerWidth >= 770 &&
        previousWidth !== 770
    ) {
        previousWidth = 770;
        generateAd([[728, 90]]);
    } else if (innerWidth < 770 && previousWidth !== 320) {
        previousWidth = 320;
        generateAd([
            [320, 100],
            [320, 50],
        ]);
    }

    function generateAd(sizes) {
        window["nitroAds"].createAd(`np${unit}`, { ...options, sizes });
    }
</script>

<div id="np{unit}" class:hidden={innerWidth >= 1280} class:mini={innerWidth < 728} />

<style lang="scss">
    .hidden {
        display: none;
    }

    div {
        margin-block: 1rem 2rem;
        min-height: 90px !important;
        display: grid;
        place-content: center;
    }

    .mini {
        margin-inline: -1rem;
        min-height: 100px !important;
    }
</style>
