<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    export let banners, version, expanded;

    const getDurationInDays = (start, end) => {
        return Math.ceil(
            Math.abs(new Date(start).getTime() - new Date(end).getTime()) /
                (1000 * 3600 * 24)
        );
    };

    function getWeeksSinceLaunch(end) {
        let start = version === "cn" ? "16 Dec 2021" : "10 Aug 2022";
        return Math.round(getDurationInDays(start, end) / 7);
    }
</script>

<tbody class="banner-table collapse" class:expanded aria-expanded={expanded}>
    <tr />
    <tr class="header">
        <th>#</th>
        <th>Simulacrum</th>
        <th>Type</th>
        <th>Notes</th>
        <th>Event Dates</th>
        <th>Duration</th>
        <th>Week #</th>
    </tr>
    {#each banners as banner, index}
        <tr>
            <td>{banners.length - index}</td>
            <td>
                <a
                    href={banner.path}
                    style={`color: var(--element-${banner.element})`}
                >
                    {banner.name}
                </a>
            </td>
            <td>
                <div class="type-and-element">
                    <CategoryIcon type={banner.type} width="30" />
                    <CategoryIcon type={banner.element} width="30" />
                </div>
            </td>
            <td>
                {#if banner.subtext}
                    <!-- Doesn't use "standardAfterwards": true, it simply adds it from subtext -->
                    <abbr title={banner.subtext} />
                {/if}
            </td>
            <td>
                {new Date(banner.start).toLocaleDateString()} —
                {new Date(banner.end).toLocaleDateString()}
            </td>
            <td>
                {getDurationInDays(banner.start, banner.end)} days
            </td>
            <td>
                {getWeeksSinceLaunch(banner.start)}~{getWeeksSinceLaunch(banner.end)}
            </td>
        </tr>
    {/each}
</tbody>

<style lang="scss">
    .banner-table {
        box-shadow: inset 0 7px 9px -7px var(--surface-shadow),
            inset 0 -7px 9px -7px var(--surface-shadow);
        font-size: var(--step--2);
        color: var(--text2);

        a,
        a:hover {
            border: none;
            color: unset;
        }

        .type-and-element {
            display: flex;
        }

        .header {
            color: var(--tier-s);
            border-bottom: 2px solid #39485f;
        }

        &:not(.expanded) {
            display: none;
        }
    }
</style>
