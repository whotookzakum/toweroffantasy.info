<script>
    import "$lib/styles/globals.scss";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    import TopNav from "./TopNav.svelte";
</script>

<GoogleAnalytics properties={["G-N68SWH7ZJB"]} />

<div class="layout grid g-50">
    <div class="gutter-left"></div>
    <div class="main-content">
        <h1>Tower of Fantasy Index</h1>
        <TopNav />
        <main>
            <slot />
        </main>
    </div>
    <div class="gutter-right"></div>
</div>

<style lang="scss">
    .layout {
        margin: auto;
        // max-width: 1160px;
        font-size: var(--step--1);
        grid-template-columns: 300px 1fr 300px;
        column-gap: 1rem;
    }

    @media (max-width: 1600px) {
        .layout {
            grid-template-columns: 160px 1fr 160px;
        }
    }

    @media (max-width: 1280px) {
        .layout {
            grid-template-columns: 0 1fr 0;
        }
    }

    h1 {
        text-align: center;
    }

    .main-content {
        grid-column: 2;
        max-width: 1150px;
        // min-width: 1150px;
        width: 100%;
        justify-self: center;
    }

    .gutter-right {
        // background: red;
        grid-column: -2/-1;
    }

    .gutter-left {
        // background: red;
        grid-column: 1/2;
    }
</style>
