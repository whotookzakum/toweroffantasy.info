<script>
    import { userTimeZone } from "$lib/stores";
    import { graphql } from "$houdini";
    import RadioSliderGroup from "$components/RadioSliderGroup.svelte";
    import CurrentBanners from "./CurrentBanners.svelte";
    import TotalBannerStats from "./TotalBannerStats.svelte";
    import BannerTableElement from "./BannerTableElement.svelte";

    export let bannerSearchTerm = "";
    export let showStats = false;
    export let showCurrentBanners = false;

    let showReruns = true;
    let highlight = true;

    const dateOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        // timeZoneName: "short",
    };

    let timeZoneOptions = [
        {
            label: "Local Time",
            value: undefined,
        },
        {
            label: "UTC",
            value: "UTC",
        },
    ];

    $: dateOptions.timeZone = $userTimeZone;

    const query = graphql(`
        query BannersQuery @load {
            banners {
                bannerNumber
                category
                detailsLink
                element
                endDate
                isFinalBanner
                isCollab
                isLimitedBannerOnly
                isRerun
                matrixId
                noWeapon
                simulacrumId
                simulacrumName
                startDate
                weaponId
            }
        }
    `);

    $: banners = $query?.data?.banners?.map((banner) => ({
        ...banner,
        endDate: banner.endDate + " UTC",
        startDate: banner.startDate + " UTC",
        totalBanners: $query.data.banners.filter(
            (b) => b.simulacrumId === banner.simulacrumId,
        ).length,
    }));

    let timeNow = new Date().getTime();

    $: currentBanners = banners
        ?.filter(
            (banner) =>
                new Date(banner.startDate).getTime() < timeNow &&
                new Date(banner.endDate).getTime() > timeNow,
        )
        .sort((a, b) => a.totalBanners - b.totalBanners);
</script>

{#if !$query.fetching}
    <div class="grid g-100 banner-table-wrapper" style="margin: 1rem 0;">
        {#if showCurrentBanners}
            <CurrentBanners {currentBanners} {timeNow} {dateOptions} />
            <h3 style="font-size: var(--step-2); margin-top: 1rem;">
                All Banners
            </h3>
        {/if}

        <div class="flex g-50" style="align-items: center">
            <input
                type="text"
                placeholder="Search banners"
                bind:value={bannerSearchTerm}
            />
            <RadioSliderGroup
                bind:group={$userTimeZone}
                groupName="banner-timezone"
                name="bannerTimeZone"
                data={timeZoneOptions}
            />
            <label>
                <input type="checkbox" bind:checked={showReruns} /> Show reruns
            </label>
            <label>
                <input type="checkbox" bind:checked={highlight} /> Highlight rows
                by element
            </label>
        </div>

        {#if showStats}
            <TotalBannerStats {banners} {timeNow} {currentBanners} />
        {/if}

        <BannerTableElement
            {banners}
            {highlight}
            {dateOptions}
            {bannerSearchTerm}
            {showReruns}
        />
    </div>
{/if}

<style lang="scss">
    :global(.banner-table-wrapper a) {
        font-weight: 600;
        border: none;
    }

    ::marker {
        content: attr(data-bannerNumber) ". ";
    }
</style>
