<script>
    import { gameVersion, userLocale, userTimeZone } from "$lib/stores";
    import { graphql } from "$houdini";
    import RadioSliderGroup from "../(db)/RadioSliderGroup.svelte";
    // import SimulacrumV2Query from "./SimulacrumV2Query.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Icon from "@iconify/svelte";

    export let bannerSearchTerm = "";
    export let showDetails = false;

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
    $: filteredBanners = banners
        ?.filter(
            (banner) =>
                banner.simulacrumName
                    .toLowerCase()
                    .includes(bannerSearchTerm.toLowerCase()) ||
                banner.bannerNumber == bannerSearchTerm,
        )
        .filter((banner) => {
            if (!showReruns && banner.isRerun) return false;
            return true;
        });

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
</script>

{#if !$query.fetching}
    <div class="grid g-100" style="margin: 1rem 0;">
        {#if showDetails}
            <div>
                <div class="flex g-50" style="align-items: baseline;">
                    <h3 style="font-size: var(--step-2); margin-block: 0 0.5rem">Current Banners</h3>
                    <button on:click={() => (timeNow = new Date().getTime())}>
                        <span class="visually-hidden">Update time</span>
                        <Icon icon="mdi:refresh" />
                    </button>
                </div>
    
                <small
                    style="color: var(--text2); display: block; margin-bottom: 0.5rem;"
                >
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
                        <!-- <SimulacrumV2Query
                            id={banner.simulacrumId}
                            isNew={uniqueBanners[0].simulacrumId ===
                                banner.simulacrumId}
                        /> -->
                    {/each}
                </ul>
            </div>

            <h3 style="font-size: var(--step-2); margin-top: 1rem;">All Banners</h3>
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

        {#if showDetails}
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
                            style:color="var(--element-{uniqueBanners[0]
                                .element})">{uniqueBanners[0].simulacrumName}</a
                        >
                    </dd>
                </div>
                <div>
                    <dt>Current banners</dt>
                    <dd></dd>
                </div>
            </dl>
        {/if}

        <table class:highlight>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Types</th>
                <th>Start</th>
                <th>End</th>
                <th>Duration</th>
                <th>Week #</th>
                <th>Notes</th>
                <th class="visually-hidden">Link</th>
            </thead>
            <tbody>
                {#each filteredBanners as banner (banner.bannerNumber)}
                    <tr class={banner.element}>
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
                            {getDurationInDays(
                                banner.startDate,
                                banner.endDate,
                            )} days
                        </td>
                        <td>
                            {getWeeksSinceLaunch(
                                banner.startDate,
                            )}~{getWeeksSinceLaunch(banner.endDate)}
                        </td>
                        <td>
                            {#if banner.isFinalBanner}
                                <i class="tag final">Final rerun</i>
                            {/if}
                            {#if banner.isCollab}
                                <i class="tag collab">Collab</i>
                            {/if}
                            {#if banner.isLimitedBannerOnly}
                                <i class="tag limited">Limited-only</i>
                            {/if}
                        </td>

                        <td>
                            <a href={banner.detailsLink} style="text-decoration: underline; color: var(--accent); font-weight: normal">Link</a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<style lang="scss">
    dl {
        background: var(--surface1);
        padding: 1rem;
        border-radius: 0.5rem;
        line-height: 1;
        gap: 0;
        margin: 0;

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

    table.highlight {
        overflow: hidden;

        .Superpower {
            background: linear-gradient(
                45deg,
                rgba(176, 255, 195, 0.1),
                rgba(176, 255, 195, 0.02)
            );
        }

        .Ice {
            background: linear-gradient(
                45deg,
                rgba(73, 163, 209, 0.1),
                rgba(73, 163, 209, 0.02)
            );
        }

        .Flame {
            background: linear-gradient(
                45deg,
                rgba(187, 64, 51, 0.1),
                rgba(187, 64, 51, 0.02)
            );
        }

        .Thunder {
            background: linear-gradient(
                45deg,
                rgba(183, 105, 190, 0.1),
                rgba(183, 105, 190, 0.02)
            );
        }

        .Physics {
            background: linear-gradient(
                45deg,
                rgba(216, 140, 42, 0.1),
                rgba(216, 140, 42, 0.02)
            );
        }

        .PhysicsFlame {
            background: linear-gradient(
                45deg,
                rgba(216, 91, 42, 0.1),
                rgba(216, 91, 42, 0.02)
            );
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
