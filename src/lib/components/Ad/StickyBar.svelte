<script>
    import { onMount } from "svelte";
    import { dev } from "$app/environment";

    export let unit = "";

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
        anchorPersistClose: false,
        mediaQuery: "(min-width: 320px) and (max-width: 767px)",
        demo: dev,
    };

    onMount(() => {
        window["nitroAds"].createAd(`np${unit}`, options);
    });
</script>

<div id="np{unit}" />
