<script>
    import BannerTable from "$lib/components/BannerTable.svelte";
    import changelog from "$lib/data/changelog.json";
    import _ from "lodash";

    export let data;

    let showGlobalBanners,
        showChinaBanners = false;

    let currentGlobalBanners = [];
    let currentChinaBanners = [];

    const todaysDate = new Date().getTime();
    data.cn.forEach((banner) => {
        const end = new Date(banner.end).getTime();
        const start = new Date(banner.start).getTime();
        if (end >= todaysDate && todaysDate > start) {
            currentChinaBanners.push(banner);
        }
    });
    data.glob.forEach((banner) => {
        const end = new Date(banner.end).getTime();
        const start = new Date(banner.start).getTime();
        if (end >= todaysDate && todaysDate > start) {
            currentGlobalBanners.push(banner);
        }
    });

    let newestBanners = {
        cn: ["Lan"],
        glob: ["Tian Lang", "Lyra"],
    };
    newestBanners.cn = newestBanners.cn.map((bannerName) => {
        return data.cn.find((item) => item.name === bannerName);
    });
    newestBanners.glob = newestBanners.glob.map((bannerName) => {
        return data.glob.find((item) => item.name === bannerName);
    });
</script>

<h1>Tower of Fantasy Index</h1>
<p>
    We prioritize data from the Global version of Tower of Fantasy. Content
    exclusive to the Chinese version is marked with <abbr
        title="China Exclusive"
    />. Issues can be reported on
    <a
        href="https://discord.com/channels/670617630717116426/1021126011158536272"
        target="_blank"
        rel="noopener noreferrer nofollow">Discord</a
    >.
</p>
<p>
    Last updated <a href="/changelog"
        >{new Date(changelog[0].date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
        })}</a
    >.
</p>

<h2 id="banners">Banners</h2>

<div class="table-wrapper">
    <table class="outer-table bg-alternate">
        <caption>
            Click on a table row to show all banners for that version.
        </caption>
        <thead>
            <th>Version</th>
            <th colspan="2">Current</th>
            <th>Total</th>
            <th>Unique</th>
            <th>Newest</th>
            <th
                >{showGlobalBanners || showChinaBanners
                    ? "To standard"
                    : "Added to standard"}
            </th>
        </thead>
        <tbody>
            <tr
                class="outer-tr"
                on:click={() => (showGlobalBanners = !showGlobalBanners)}
                on:keydown={(e) =>
                    e.key === "Enter"
                        ? (showGlobalBanners = !showGlobalBanners)
                        : null}
                tabindex={0}
            >
                <th>Global</th>
                <td colspan="2" class="current-banners">
                    {#each currentGlobalBanners as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td>{data.glob.length}</td>
                <td>{_.uniqBy(data.glob, "name").length}</td>
                <td class="newest-banners">
                    {#each newestBanners.glob as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td
                    >{data.glob.filter((banner) => banner.standardAfterwards)
                        .length}</td
                >
            </tr>
        </tbody>
        <BannerTable
            banners={data.glob}
            version="glob"
            expanded={showGlobalBanners}
        />
        <tbody>
            <tr
                class="outer-tr"
                on:click={() => (showChinaBanners = !showChinaBanners)}
                on:keydown={(e) =>
                    e.key === "Enter"
                        ? (showChinaBanners = !showChinaBanners)
                        : null}
                tabindex={0}
            >
                <th>China</th>
                <td colspan="2" class="current-banners">
                    {#each currentChinaBanners as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td>{data.cn.length}</td>
                <td>{_.uniqBy(data.cn, "name").length}</td>
                <td class="newest-banners">
                    {#each newestBanners.cn as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td
                    >{data.cn.filter((banner) => banner.standardAfterwards)
                        .length}</td
                >
            </tr>
        </tbody>
        <BannerTable
            banners={data.cn}
            version="cn"
            expanded={showChinaBanners}
        />
    </table>
</div>

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
        text-align: left;

        thead th {
            color: var(--text2);
        }

        thead,
        tbody {
            background-color: var(--surface3);
        }
    }

    .newest-banners a,
    .current-banners a {
        font-size: var(--step--2);
        border: none;

        &:not(:last-of-type)::after {
            content: ", ";
            color: var(--text1);
        }
    }

    .outer-tr:hover {
        background: rgba(255, 255, 255, 0.05);
        color: var(--accent);
    }

    footer {
        font-size: var(--step--2);
        line-height: 1.6;
        color: var(--text2);

        h4 {
            margin-top: 1.5rem;
            font-size: inherit;
            color: var(--accent);
        }
    }
</style>
