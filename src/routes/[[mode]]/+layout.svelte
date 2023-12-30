<script>
    import BackgroundImage from "$components/BackgroundImage.svelte";
    import "$lib/styles/globals.scss";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    import TopNav from "$components/TopNav.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores"
    import { browser } from "$app/environment"
    import Ad from "$components/Ad.svelte";

    // Alternative would be to have a store derived from page called linkPrefix, and just append that to all hrefs. It will either be /cn or blank.
    // This does not work for client fetched data, i.e. the banner table
    $: if (browser) {
        const hi = document.querySelectorAll("a")
        // console.log(hi)
        if ($page.url.pathname.includes("/cn")) {
            hi.forEach(link => {
                // console.log("href: ",link.getAttribute("href"))
                if (!link.href.includes("/cn")) {
                    link.href = "/cn" + link.getAttribute("href")
                }
            })
        }
        else {
            hi.forEach(link => {
                link.href = link.getAttribute("href").replace("/cn", "")
            })
        }
    }

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
</div>

<BackgroundImage src={data.bgImg} />

<style lang="scss">
    .layout {
        margin: auto;
        font-size: var(--step--1);
        grid-template-columns: 300px 1fr 300px;
        gap: 1rem;
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

    :global(ul.entry-list) {
        --img-width: 140px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--img-width), 1fr));
        padding: 0;
        gap: 1rem;
        width: 100%;
    }

    :global(.filters-row) {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1.5rem;
    }

    .main-content {
        grid-column: 2;
        max-width: 1160px;
        width: 100%;
        justify-self: center;
    }

    .gutter-right {
        grid-column: -2/-1;
    }

    .gutter-left {
        grid-column: 1/2;
    }
</style>
