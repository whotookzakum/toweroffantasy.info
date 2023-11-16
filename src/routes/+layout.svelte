<script>
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/Navigation.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";
    import Ad from "$lib/components/Ad.svelte";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    let navIsOpen;
</script>

<svelte:head>
    <meta property="og:site_name" content="Tower of Fantasy Index" />
</svelte:head>

<GoogleAnalytics properties={["G-N68SWH7ZJB"]} />

<main class="main-layout">
    <slot />
</main>

<!-- <BackgroundImage /> -->

<style global lang="scss">
    main {
        margin: auto;
        max-width: 1160px;
    }
</style>
