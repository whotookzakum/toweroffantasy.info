<script>
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import unitOptions from "./A_UnitOptions.json";
    import { onMount } from "svelte";
    export let unit = "";
    export let style;
    export let refreshOnNav = false;

    let optionName = unit.replace(/\d+/g, "");
    let innerWidth, previousWidth;
    let hidden = false;

    onMount(() => {
        previousWidth = window.innerWidth
        generateAd();
    });

    $: if (refreshOnNav && browser && $page.url.pathname) {
        generateAd();
    }

    function generateAd(type = optionName) {
        window["nitroAds"].createAd("np" + unit, {
            ...unitOptions[type],
            demo: true
        });
    }

    // Refresh ads when resizing past breakpoints
    $: if (optionName === "Gutter") {
        if (innerWidth > 1600 && previousWidth !== 1600) {
            previousWidth = 1600;
            hidden = false
            generateAd("Gutter")
            console.log("hello")
        }
        else if (innerWidth < 1600 && innerWidth > 1280 && previousWidth !== 1280) {
            previousWidth = 1280;
            hidden = false
            generateAd("Gutter")
            console.log("medium")
        }
        else if (innerWidth < 1280 && previousWidth !== 0) {
            previousWidth = 0;
            hidden = true
            console.log("zero")
        }
    }

    // if
    // (innerWidth > 1600) 300px gutters
    // (innerWidth > 1280) 160px gutters
    // 0 gutters
</script>

<svelte:window bind:innerWidth />
{#if !hidden}
    <div id="np{unit}" class="grid {optionName}" {style} />
{/if}

<style lang="scss">
    div {
        background: green;
    }

    .Banner {
        min-height: 100px !important;
        place-content: center;
    }
</style>
