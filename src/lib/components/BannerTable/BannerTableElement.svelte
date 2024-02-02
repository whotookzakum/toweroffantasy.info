<script>
    import { page } from "$app/stores";
    import { userLocale } from "$lib/stores";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import Tag from "../Tag.svelte";
    import Popper from "$components/Popper.svelte";

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

    const getDurationInDays = (start, end) => {
        return Math.ceil(
            Math.abs(new Date(start).getTime() - new Date(end).getTime()) /
                (1000 * 3600 * 24),
        );
    };

    function getWeeksSinceLaunch(end) {
        const start = $page.url.pathname.includes("/cn")
            ? "16 Dec 2021"
            : "10 Aug 2022";
        return Math.round(getDurationInDays(start, end) / 7);
    }
</script>

<table class:highlightRows>
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
                        <CategoryIcon type={banner.element} style="width: 30px" tooltip />
                        <CategoryIcon type={banner.category} style="width: 30px" tooltip />
                    </div>
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

<style lang="scss">
    td {
        padding-block: 0.5rem;
    }

    table.highlightRows {
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

        .OverseasZeke,
        .PhysicsFlame {
            background: linear-gradient(
                45deg,
                rgba(216, 91, 42, 0.1),
                rgba(216, 91, 42, 0.02)
            );
        }
    }
</style>
