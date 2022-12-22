<script>
    export let banners;
</script>

<table class="banner-table" rules="none">
    <thead>
        <th>Simulacrum</th>
        <th>Event Dates</th>
        <th>Duration</th>
        <th>Week #</th>
    </thead>
    <tbody>
        {#each banners as banner}
            <tr>
                <td style={`color: var(--element-${banner.element})`} >
                    <a href={`/simulacra/${banner.name.toLowerCase()}`}>{banner.name}</a>
                </td>
                <td>{banner.start}<br />{banner.end}</td>
                <td>{banner.duration}</td>
                <td>{banner.week}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    .banner-table {
        background: none;
        width: 100%;

        thead {
            color: var(--accent);
        }
    }
</style>