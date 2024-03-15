<script>
    import { DateTime } from "luxon";

    export let banners, timeNow, currentBanners;

    const movedToStandard = banners.filter(
        (banner) =>
            banner.isFinalBanner &&
            timeNow > DateTime.fromISO(banner.endDate),
    );

    const reruns = banners.filter((banner) => banner.isRerun);

    const uniqueBanners = banners.filter((banner) => !banner.isRerun);
</script>

<dl class="flex flex-wrap g-100">
    <div>
        <dt class="mini-header">Total banners</dt>
        <dd>
            <span>{banners.length}</span>
            <small>
                ({uniqueBanners.length} unique, {reruns.length} reruns)
            </small>
        </dd>
    </div>
    <div>
        <dt>Current Banners</dt>
        <dd>{currentBanners.length}</dd>
    </div>
    <div>
        <dt>Moved to standard</dt>
        <dd>{movedToStandard.length}</dd>
    </div>
    <div>
        <dt>Newest</dt>
        <dd>
            {#each currentBanners.filter((banner) => banner.totalBanners === 1) as banner}
                <a
                    href="/simulacra/{banner.simulacrumId}"
                    style:color="var(--element-{banner.element})"
                    class="current-banner-link">{banner.simulacrumName}</a
                >
            {/each}
        </dd>
    </div>
    
</dl>

<style lang="scss">
    dl {
        background: var(--surface1);
        padding: 1rem;
        border-radius: 0.5rem;
        line-height: 1;
        margin: 0;
        white-space: nowrap;

        dd {
            padding: 0;
            margin: 0;
            font-weight: 500;
            font-size: var(--step-2);
        }

        dt {
            font-size: var(--step--2);
            font-weight: 600;
            color: var(--text2);
            text-transform: uppercase;
        }

        small {
            color: var(--text2);
            font-weight: normal;
        }

        & > div {
            gap: 0;
            flex: 1;
            flex-basis: 20ch;
        }
    }

    .current-banner-link:not(:last-of-type)::after {
        content: ", ";
        color: var(--text1);
    }
</style>
