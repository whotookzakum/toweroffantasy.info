<script>
    import { gameVersion, userLocale, userTimeZone } from "$lib/stores";
    import { graphql } from "$houdini";
    import RadioSliderGroup from "./RadioSliderGroup.svelte";
    import SimulacrumV2Query from "./SimulacrumV2Query.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Icon from "@iconify/svelte";

    export let bannerSearchTerm = "";

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

    const getDurationInDays = (start, end) => {
        return Math.ceil(
            Math.abs(new Date(start).getTime() - new Date(end).getTime()) /
                (1000 * 3600 * 24),
        );
    };

    function getWeeksSinceLaunch(end) {
        let start = $gameVersion === "cn" ? "16 Dec 2021" : "10 Aug 2022";
        return Math.round(getDurationInDays(start, end) / 7);
    }

    $: banners = $query?.data?.banners?.map((banner) => ({
        ...banner,
        endDate: banner.endDate + " UTC",
        startDate: banner.startDate + " UTC",
    }));

    // could implement advanced filters like "element:fire", "#37", "type:dps" but easier with visual filters
    $: filteredBanners = banners?.filter(
        (banner) =>
            banner.simulacrumName
                .toLowerCase()
                .includes(bannerSearchTerm.toLowerCase()) ||
            banner.bannerNumber == bannerSearchTerm,
    );

    let timeNow = new Date().getTime();

    $: movedToStandard = banners?.filter(
        (banner) =>
            banner.isFinalBanner &&
            timeNow > new Date(banner.endDate).getTime(),
    );

    $: reruns = banners?.filter((banner) => banner.isRerun);

    $: uniqueBanners = banners?.filter((banner) => !banner.isRerun);

    $: currentBanners = banners?.filter(
        (banner) =>
            new Date(banner.startDate).getTime() < timeNow &&
            new Date(banner.endDate).getTime() > timeNow,
    );

    // all limited characters
    // all standard characters
</script>

{#if !$query.fetching}
    <!-- <p>
        Mi-a has knowledge of {banners.length} banners ({uniqueBanners.length}
        unique and {reruns.length} reruns). <br />
        {movedToStandard.length} characters were moved from limited banner to standard
        banner. <br /> The newest character is {uniqueBanners[0]
            .simulacrumName}.
    </p> -->

    <div class="flex g-50" style="align-items: baseline;">
        <h3 style="font-size: var(--step-2)">Current Banners</h3>
        <button on:click={() => (timeNow = new Date().getTime())}>
            <span class="visually-hidden">Update time</span>
            <Icon icon="mdi:refresh" />
        </button>
    </div>

    <small style="color: var(--text2); display: block; margin-bottom: 0.5rem;">
        Last updated: <time>
            {new Date(timeNow).toLocaleDateString($userLocale, {
                ...dateOptions,
                second: "numeric",
                timeZoneName: "short",
            })}
        </time>
    </small>

    <ul class="entry-list">
        {#each currentBanners as banner}
            <SimulacrumV2Query
                id={banner.simulacrumId}
                isNew={uniqueBanners[0].simulacrumId === banner.simulacrumId}
            />
        {/each}
    </ul>

    <h3 style="font-size: var(--step-2)">All Banners</h3>

    <div class="flex g-50">
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
    </div>

    <dl class="flex g-50">
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
            <dt>Moved to standard</dt>
            <dd>{movedToStandard.length}</dd>
        </div>
        <div>
            <dt>Newest</dt>
            <dd>
                <a
                    href="/simulacra/{uniqueBanners[0].simulacrumId}"
                    style:color="var(--element-{uniqueBanners[0].element})"
                    >{uniqueBanners[0].simulacrumName}</a
                >
            </dd>
        </div>
        <div style="width: 100%">
            <dt>Current banners</dt>
            <dd></dd>
        </div>
    </dl>

    <table>
        <thead>
            <th>#</th>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Duration</th>
            <th>Week #</th>
            <th>Notes</th>
            <th>Link</th>
        </thead>
        <tbody>
            {#each filteredBanners as banner (banner.bannerNumber)}
                <tr>
                    <td>{banner.bannerNumber}</td>

                    <td>
                        <a
                        href="/simulacra/{banner.simulacrumId}"
                        style:color="var(--element-{banner.element})"
                        >{banner.simulacrumName}</a
                    >
                    </td>

                    <td>
                        <CategoryIcon
                            type={banner.element}
                            style="width: 30px"
                        />
                        <CategoryIcon
                            type={banner.category}
                            style="width: 30px"
                        />
                    </td>

                    <td>
                        {new Date(banner.startDate).toLocaleString(
                            $userLocale,
                            dateOptions,
                        )}
                    </td>

                    <td>
                        {new Date(banner.endDate).toLocaleString(
                            $userLocale,
                            dateOptions,
                        )}
                    </td>
                    <td>
                        {getDurationInDays(banner.startDate, banner.endDate)} days
                    </td>
                    <td>
                        {getWeeksSinceLaunch(
                            banner.startDate,
                        )}~{getWeeksSinceLaunch(banner.endDate)}
                    </td>
                    <td>
                        <i class="tag collab">Collab</i>
                        <i class="tag final">Final</i>
                        <i class="tag limited">Limited</i>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>

    <div class="table">
        <div class="headers grid g-50" aria-hidden="true">
            <p>#</p>
            <p>Name</p>
            <p>Types</p>
            <p>Start</p>
            <p>End</p>
            <p>Duration</p>
            <p>Week #</p>
            <p>Notes</p>
        </div>
        <ol reversed>
            {#each filteredBanners as banner (banner.bannerNumber)}
                <li class="grid g-50" data-bannerNumber={banner.bannerNumber}>
                    <div>{banner.bannerNumber}</div>

                    <a
                        href="/simulacra/{banner.simulacrumId}"
                        style:color="var(--element-{banner.element})"
                        >{banner.simulacrumName}</a
                    >

                    <div>
                        <CategoryIcon
                            type={banner.element}
                            style="width: 30px"
                        />
                        <CategoryIcon
                            type={banner.category}
                            style="width: 30px"
                        />
                    </div>

                    <div>
                        {new Date(banner.startDate).toLocaleString(
                            $userLocale,
                            dateOptions,
                        )}
                    </div>

                    <div>
                        {new Date(banner.endDate).toLocaleString(
                            $userLocale,
                            dateOptions,
                        )}
                    </div>
                    <div>
                        {getDurationInDays(banner.startDate, banner.endDate)} days
                    </div>
                    <div>
                        {getWeeksSinceLaunch(
                            banner.startDate,
                        )}~{getWeeksSinceLaunch(banner.endDate)}
                    </div>
                    <div class="flex g-25">
                        <i class="tag collab">Collab</i>
                        <i class="tag final">Final</i>
                        <i class="tag limited">Limited</i>
                    </div>
                </li>
            {/each}
        </ol>
    </div>
{/if}

<style lang="scss">
    dl {
        background: var(--surface1);
        padding: 1rem;
        border-radius: 0.5rem;
        line-height: 1;
        gap: 0;

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
        }
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    .table {
        border-radius: 0.5rem;
        background: var(--surface1);
        overflow: hidden;

        ol {
            gap: 0;
            padding: 0;
            margin: 0;
        }

        .headers {
            background: var(--surface2);
        }

        p {
            margin: 0;
        }

        .headers,
        li {
            font-size: var(--step--2);
            padding: 0.5rem 1rem;
            align-items: center;
            grid-template-columns: 4ch 10ch 10ch 20ch 20ch 8ch 8ch 22ch;
        }
    }

    a {
        font-weight: 600;
        border: none;
    }

    button {
        display: flex;
        font-size: var(--step-1);
        border-radius: 0.5rem;
        padding: 0.35rem;
        align-items: center;
        justify-content: center;

        &:hover,
        &:focus-visible {
            color: var(--accent);
            background: var(--surface2);
        }
    }

    ::marker {
        content: attr(data-bannerNumber) ". ";
    }
</style>
