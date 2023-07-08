<script>
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import unitOptions from "./A_UnitOptions.json";
    import { onMount } from "svelte";
    export let unit = "";
    export let refreshOnNav = false;

    let optionName = unit;

    if (optionName.includes("Banner")) optionName = "Banner";

    onMount(() => {
        generateAd();
    });

    $: if (refreshOnNav && browser && $page.url.pathname) {
        generateAd();
    }

    function generateAd() {
        window["nitroAds"].createAd("np" + unit, {
            ...unitOptions[optionName],
            demo: unit === "Video" ? false : true,
        });
    }
</script>

{#if unit === "Video"}
    <div id="npVideo" />
{/if}

{#if unit.includes("Banner")}
    <!-- <div class="full-bleed unit-container">
        <small class="background-message">
            🥺 Please consider whitelisting us. Ads support free resources like
            this!
        </small>
        <div id={`np${unit}`} />
    </div> -->
    <div id={`np${unit}`} />
{/if}
