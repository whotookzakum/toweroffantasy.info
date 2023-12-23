<script>
    import "$lib/styles/globals.scss";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    import TopNav from "./TopNav.svelte";
</script>

<GoogleAnalytics properties={["G-N68SWH7ZJB"]} />

<div class="layout grid g-50">
    <h1>Tower of Fantasy Index</h1>
    <TopNav />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    .layout {
        margin: auto;
        max-width: 1160px;
        font-size: var(--step--1);
    }

    h1 {
        text-align: center;
    }
</style>
