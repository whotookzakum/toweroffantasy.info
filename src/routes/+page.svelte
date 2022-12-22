<script>
    import BannerTable from "$lib/components/BannerTable.svelte";

    let showGlobalBanners,
        showChinaBanners = false;

    const globalBanners = [
        {
            name: "Lin",
            element: "altered",
            start: "16 Dec 2022",
            end: "28 Dec 2022",
            duration: "12d",
            week: "43~45",
        },
        {
            name: "Fenrir",
            element: "volt",
            start: "16 Dec 2022",
            end: "28 Dec 2022",
            duration: "12d",
            week: "43~45",
        },
        {
            name: "Annabella",
            element: "flame",
            start: "16 Dec 2022",
            end: "28 Dec 2022",
            duration: "12d",
            week: "43~45",
        },
    ];

    const chinaBanners = [
        {
            name: "Ruby",
            element: "flame",
            start: "16 Dec 2022",
            end: "28 Dec 2022",
            duration: "12d",
            week: "43~45",
        },
        {
            name: "Saki Fuwa",
            element: "ice",
            start: "16 Dec 2022",
            end: "28 Dec 2022",
            duration: "12d",
            week: "43~45",
        },
        {
            name: "Tian Lang",
            element: "volt",
            start: "16 Dec 2022",
            end: "28 Dec 2022",
            duration: "12d",
            week: "43~45",
        },
    ];
</script>

<h1>Tower of Fantasy Index</h1>
<p>
    We prioritize data from the Global version of Tower of Fantasy. Content
    exclusive to the Chinese version is marked with <abbr title="China Exclusive"/>.
    Issues can be reported on <a href="https://discord.com/channels/670617630717116426/1021126011158536272" target="_blank" rel="noopener noreferrer nofollow">Discord</a>.
</p>
<p>
    Last updated <a href="/changelog">November 22</a>.
</p>

<h2 id="banners">Banners</h2>
<figure>
    <table class="outer-table full-bleed" rules="none">
        <thead>
            <th>Version</th>
            <th>Current</th>
            <th>Total</th>
            <th>Unique</th>
            <th>Newest</th>
            <!-- Moved to standard -->
            <th>To standard</th> 
        </thead>
        <tbody>
            <tr
                class="outer-tr"
                on:click={() => (showGlobalBanners = !showGlobalBanners)}
                on:keydown={(e) => e.key === "Enter" ? (showGlobalBanners = !showGlobalBanners) : null}
                tabindex={0}
            >
                <th>Global</th>
                <td><a href="/simulacra/lin">Lin</a></td>
                <td>7</td>
                <td>7</td>
                <td><a href="/simulacra/lin">Lin</a></td>
                <td>0</td>
            </tr>
            <tr class="collapse" class:expand={showGlobalBanners}>
                <td colspan="6">
                    <BannerTable banners={globalBanners} />
                </td>
            </tr>
            <tr
                class="outer-tr"
                on:click={() => (showChinaBanners = !showChinaBanners)}
                on:keydown={(e) => e.key === "Enter" ? (showChinaBanners = !showChinaBanners) : null}
                tabindex={0}
            >
                <th>China</th>
                <td><a href="/simulacra/fenrir">Fenrir</a></td>
                <td>30</td>
                <td>15</td>
                <td><a href="/simulacra/fenrir">Fenrir</a></td>
                <td>4</td>
            </tr>
            <tr class="collapse" class:expand={showChinaBanners}>
                <td colspan="6">
                    <BannerTable banners={chinaBanners} />
                </td>
            </tr>
        </tbody>
    </table>
    <figcaption style="color: var(--accent)">
        Click on a table row to show all banners for that version.
    </figcaption>
</figure>

<h3>Credits</h3>
<footer>
    <h4>Created by</h4>
    <span>Pyrosu, Zakum</span>

    <h4>Original contents by</h4>
    <span>Pyrosu, BakuBaku, Sera Naoki</span>

    <h4>Special thanks</h4>
    <span
        >Sova, Afrodiy, HungryBunny, Cytus, realEmperor, Stitch, Abyss, tiny,
        Gateoo, Sky, ChickenJoy, Riala, 👑킹젖가슴드래곤👑, Fanatique</span
    >
</footer>

<style lang="scss">
    .outer-table {
        width: 100%;
        overflow-x: scroll;
        background-color: var(--surface3);
        text-align: left;
        table-layout: fixed;
    }

    .outer-tr:hover {
        background: rgba(255, 255, 255, 0.05);
        color: var(--accent);
    }

    .collapse {
        background: var(--surface2);
        box-shadow: 
            inset 0 7px 9px -7px var(--surface-shadow), 
            inset 0 -7px 9px -7px var(--surface-shadow);

        &:not(.expand) {
            display: none;
        }

        & > * {
            padding: 0;
        }
    }

    footer {
        font-size: var(--step--1);
        line-height: 1.6;
        color: var(--text2);

        h4 {
            margin-top: 1.5rem;
            font-size: inherit;
            color: var(--accent);
        }
    }
</style>
