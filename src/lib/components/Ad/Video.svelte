<script>
    import { onMount } from "svelte";

    export let unit = "";

    const options = {
        format: "video-nc",
        mediaQuery: "(min-width: 320px) and (max-width: 767px)",
        video: {},
    };

    onMount(() => {
        window["nitroAds"].createAd(`np${unit}`, options);
    });
</script>

<div id="np{unit}" />
