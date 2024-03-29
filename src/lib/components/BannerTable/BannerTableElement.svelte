<script>
    import { page } from "$app/stores";
    import { userLocale } from "$lib/stores";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import Tag from "../Tag.svelte";
    import Popper from "$components/Popper.svelte";
    import { DateTime } from "luxon";

    export let banners,
        highlightRows,
        dateOptions,
        bannerSearchTerm,
        showReruns;

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

    const getDuration = (startDate, endDate, outputType, round) => {
        const start = DateTime.fromISO(startDate).set({ hour: 0, minute: 0 });
        const end = DateTime.fromISO(endDate).set({ hour: 0, minute: 0 });
        const diff = end.diff(start, outputType).toObject();
        return round ? Math.round(diff[outputType]) : diff[outputType];
    };

    $: launchDate = $page.url.pathname.includes("/cn")
            ? DateTime.fromISO("2021-12-16T08:00:00+08:00")
            : DateTime.fromISO("2022-08-11T00:00:00-00:00")
</script>

<div class="table-wrapper">
    <table class="bg-alternate" class:highlightRows>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Types</th>
                <th>Start</th>
                <th>End</th>
                <th>Duration</th>
                <th>Week #</th>
                <th>Notes</th>
                <th>News</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredBanners as banner (banner.bannerNumber)}
                <tr class={banner.element}>
                    <td>{banner.bannerNumber}</td>
                    <td>
                        <a
                            href="/simulacra/{banner.simulacrumId}"
                            style:color="var(--element-{banner.element})"
                            class="flex g-25"
                            style="align-items: center; width: fit-content;"
                        >
                            <img
                                src={banner.simulacrum.assetsA0.avatar}
                                alt=""
                                width="52"
                                height="52"
                                style="margin: -0.3rem 0 -0.3rem -0.3rem"
                            />
                            {banner.simulacrumName}
                        </a>
                    </td>
                    <td>
                        <div class="flex g-25" style="align-items: center">
                            <CategoryIcon
                                type={banner.element}
                                style="width: 30px"
                                tooltip
                            />
                            <CategoryIcon
                                type={banner.category}
                                style="width: 30px"
                                tooltip
                            />
                        </div>
                    </td>
                    <td>
                        {DateTime.fromISO(banner.startDate)
                            .setLocale($userLocale)
                            .toLocaleString(dateOptions)}
                    </td>
                    <td>
                        {DateTime.fromISO(banner.endDate)
                            .setLocale($userLocale)
                            .toLocaleString(dateOptions)}
                    </td>
                    <td>
                        {getDuration(banner.startDate, banner.endDate, "days")} days
                    </td>
                    <td>
                        {getDuration(launchDate, banner.startDate, "weeks", true)}~{getDuration(launchDate, banner.endDate, "weeks", true)}
                    </td>
                    <td style="line-height: 2;">
                        {#if banner.isFinalBanner}
                            <Popper>
                                <Tag type="final" />
                                <p slot="tooltip">
                                    Will be moved to Standard Cache
                                </p>
                            </Popper>
                        {/if}
                        {#if banner.isCollab}
                            <Popper>
                                <Tag type="collab" />
                                <p slot="tooltip">
                                    Only available during the collab period
                                </p>
                            </Popper>
                        {/if}
                        {#if banner.isLimitedBannerOnly}
                            <Popper>
                                <Tag type="limited" />
                                <p slot="tooltip">
                                    Will NOT be moved to Standard Cache
                                </p>
                            </Popper>
                        {/if}
                    </td>
                    <td>
                        <a
                            href={banner.detailsLink}
                            style="text-decoration: underline; color: var(--accent); font-weight: normal"
                            >Link</a
                        >
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    td {
        padding-block: 0.5rem;
    }

    table {
        white-space: nowrap;
    }

    // .table-wrapper {
    //     max-height: 600px;
    //     border-radius: 0.5rem;
    // }

    // thead {
    //     position: sticky;
    //     top: 0;
    //     z-index: 500;
    //     background: var(--surface1);
    // }

    table.highlightRows {
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

        .FlamePhysics {
            background: linear-gradient(
                45deg,
                rgba(216, 91, 42, 0.1),
                rgba(216, 91, 42, 0.02)
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

        .OverseasZeke,
        .PhysicsFlame {
            background: linear-gradient(
                45deg,
                rgba(216, 91, 42, 0.1),
                rgba(216, 91, 42, 0.02)
            );
        }

        .VoltIce,
        .IceThunder {
            background: linear-gradient(
                45deg,
                rgba(106, 105, 190, 0.15),
                rgba(106, 105, 190, 0.02)
            );
        }

        .ThunderIce {
            background: linear-gradient(
                45deg,
                rgba(68, 145, 247, 0.15),
                rgba(68, 145, 247, 0.02)
            );
        }
    }
</style>
