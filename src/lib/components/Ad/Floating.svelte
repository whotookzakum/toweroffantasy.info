<script>
    import { onMount } from "svelte";

    export let unit = "";

    const options = {
        refreshTime: 30,
        format: "floating",
        floating: {
            position: "left",
            reduceMobileSize: true
        },
        report: {
            enabled: true,
            icon: true,
            wording: "Report Ad",
            position: "top-left",
        },
    };

    onMount(() => {
        window["nitroAds"].createAd(`np${unit}`, options);
    });
</script>
