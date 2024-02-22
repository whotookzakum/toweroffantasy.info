<script>
    import BackgroundImage from "$components/BackgroundImage.svelte";
    import "$lib/styles/globals.scss";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    import TopNav from "$components/TopNav.svelte";
    import Ad from "$components/Ad/Ad.svelte";
    import PageFooter from "$lib/components/PageFooter.svelte";

    export let data;
</script>

<GoogleAnalytics properties={["G-N68SWH7ZJB"]} />

<div class="layout grid g-50">
    <TopNav />
    <div class="gutter-left">
        <Ad unit="Gutter1" />
    </div>
    <div class="main-content">
        <main>
            <Ad unit="Banner1" />
            <slot />
        </main>
    </div>
    <div class="gutter-right">
        <Ad unit="Gutter2" />
    </div>
    <PageFooter />
</div>

<BackgroundImage src={data.bgImg} />

<style lang="scss">
    .layout {
        margin: auto;
        font-size: var(--step--1);
        gap: 0;
    }

    .layout,
    :global(.topnav),
    :global(.page-footer) {
        grid-template-columns: 300px 1fr 300px;
    }

    @media (max-width: 1600px) {
        .layout,
        :global(.topnav),
        :global(.page-footer) {
            grid-template-columns: 160px 1fr 160px;
        }
    }

    @media (max-width: 1280px) {
        .layout,
        :global(.topnav),
        :global(.page-footer) {
            grid-template-columns: 0 1fr 0;
        }
    }

    .main-content {
        grid-column: 2;
        max-width: 1192px;
        width: 100%;
        justify-self: center;
        padding: 1rem;
        background: hsla(236, 45%, 10%, 0.93);
    }

    .gutter-right {
        grid-column: -2/-1;
    }

    .gutter-left {
        grid-column: 1/2;
    }

    // Misc
    :global(ul.entry-list) {
        --img-width: 140px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--img-width), 1fr));
        padding: 0;
        gap: 1rem;
        width: 100%;
    }

    @media (max-width: 360px) {
        :global(ul.entry-list) {
            --img-width: 130px;
        }
    }

    :global(.filters-row) {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1.5rem;
    }

    :global(.icons-box) {
        padding: 0.125rem 0.25rem;
        align-items: center;
    }

    :global(.icons-box label) {
        padding: 0.2rem;
        border: 1px solid transparent;
        border-radius: 4px;
    }

    // To offset fixed topnav
    @media (max-width: 860px) {
        .main-content {
            padding-top: calc(1rem + 52px);
        }
    }
</style>
