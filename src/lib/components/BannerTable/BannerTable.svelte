<script>
    import { userTimeZone } from "$lib/stores";
    import CurrentBanners from "./CurrentBanners.svelte";
    import TotalBannerStats from "./TotalBannerStats.svelte";
    import BannerTableElement from "./BannerTableElement.svelte";
    import TableFilters from "./TableFilters.svelte";

    export let banners;
    export let style;
    export let showStats = false;
    export let showCurrentBanners = false;
    export let bannerSearchTerm = "";
    let showReruns = true;
    let highlightRows = true;
    let timeNow = new Date().getTime();

    $: dateOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: $userTimeZone,
    };

    $: currentBanners = banners
        .filter(
            (banner) =>
                new Date(banner.startDate).getTime() < timeNow &&
                new Date(banner.endDate).getTime() > timeNow,
        )
        .sort((a, b) => getEarliestBannerNo(b) - getEarliestBannerNo(a));

    function getEarliestBannerNo(banner) {
        return banners
            .filter((b) => b.simulacrumId === banner.simulacrumId)
            .reduce((acc, curr) => {
                return curr.bannerNumber < acc ? curr.bannerNumber : acc;
            }, 99999);
    }
</script>

<div class="grid g-100 banner-table-wrapper" {style}>
    {#if showCurrentBanners}
        <CurrentBanners {currentBanners} {timeNow} {dateOptions} />
        <h3 style="font-size: var(--step-2); margin-top: 1rem;">All Banners</h3>
    {/if}

    <TableFilters bind:bannerSearchTerm bind:showReruns bind:highlightRows />

    {#if showStats}
        <TotalBannerStats {banners} {timeNow} {currentBanners} />
    {/if}

    <BannerTableElement
        {banners}
        {highlightRows}
        {dateOptions}
        {bannerSearchTerm}
        {showReruns}
    />
</div>

<style lang="scss">
    .banner-table-wrapper {
        margin: 1rem 0;
    }

    :global(.banner-table-wrapper a) {
        font-weight: 600;
        border: none;
    }

    ::marker {
        content: attr(data-bannerNumber) ". ";
    }
</style>
