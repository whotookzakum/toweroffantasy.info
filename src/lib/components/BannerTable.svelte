<script>
	import CategoryIcon from '$lib/components/simulacrum/CategoryIcon.svelte';
    export let banners, version;

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

<table class="banner-table">
    <thead>
        <th>#</th>
        <th>Simulacrum</th>
        <th>Type</th>
        <th>Notes</th>
        <th>Event Dates</th>
        <th>Duration</th>
        <th>Week #</th>
    </thead>
    <tbody>
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
                <td class="banner-type">
                    <CategoryIcon type={banner.type} width="30" />
                    <CategoryIcon type={banner.element} width="30" />
                </td>
                <td>
                    {#if banner.subtext}
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
                    {getWeeksSinceLaunch(banner.start)}~{getWeeksSinceLaunch(
                        banner.end
                    )}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    .banner-table {
        margin: 0;
        box-shadow: inset 0 7px 9px -7px var(--surface-shadow),
            inset 0 -7px 9px -7px var(--surface-shadow);
        font-size: var(--step--2);

        a,
        a:hover {
            border: none;
            color: unset;
        }

        td {
            color: var(--text2);
        }

        .banner-type {
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;
        }
    }
</style>
